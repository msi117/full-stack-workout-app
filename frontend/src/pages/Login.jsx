import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <div className="container w-11/12">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="Email"
          className="input input-bordered input-info w-full m-2"
          onChange={onChange}
        />
        <input
          type="password"
          id="email"
          name="password"
          value={password}
          placeholder="Password"
          className="input input-bordered input-info w-full m-2"
          onChange={onChange}
        />

        <button className="btn btn-info w-full m-2" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
