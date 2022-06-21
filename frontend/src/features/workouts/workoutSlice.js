import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import workoutService from "./workoutservice";

const initialState = {
  workoutsArray: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// localStorage.setItem('workouts')

// get workouts
export const getWorkouts = createAsyncThunk(
  "workouts/get",
  async (_, thunkAPI) => {
    try {
      return await workoutService.getChest();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const workoutSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWorkouts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWorkouts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.workoutsArray = action.payload
      })
      .addCase(getWorkouts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = workoutSlice.actions;
export default workoutSlice.reducer;
