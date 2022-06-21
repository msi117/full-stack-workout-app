import React, { useState } from "react";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = data;

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
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={name}
          className="input input-bordered input-info w-full m-2"
          onChange={onChange}
        />
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
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          className="input input-bordered input-info w-full m-2"
          onChange={onChange}
        />
        <input
          type="password"
          id="password2"
          name="password2"
          value={password2}
          placeholder="Password"
          className="input input-bordered input-info w-full m-2"
          onChange={onChange}
        />

        <button className="btn btn-info w-full m-2" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
