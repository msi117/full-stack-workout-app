import axios from "axios";


const workouts = [
    {
        name: 'workout one',
        id: 1,
        text: 'this is workout one',
    },
    {
        name: 'workout two',
        id: 2,
        text: 'this is workout two',
    },
    {
        name: 'workout three',
        id: 3,
        text: 'this is workout three',
    }
]

// get all workouts
const getAll = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": "edcab2e595mshfd678aac1f40df7p1b9ba9jsn392a5f269509",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  return response.data;
};


//Get chest
const getChest = async() => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest',
        headers: {
          'X-RapidAPI-Key': 'edcab2e595mshfd678aac1f40df7p1b9ba9jsn392a5f269509',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

    //   const response = await axios.request(options)
    //   console.log('Chest data',response.data)
      console.log('from services', workouts)
      return workouts
}






const workoutService = {
  getAll,
  getChest,
};

export default workoutService;
