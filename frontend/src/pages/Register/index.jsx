import React, { useState } from "react";
import "./style.css";

export default function Register() {

  
  const [state, setState] = useState({
    name: "",
    email:"",
    postalcode:"",
    password: ""
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (

      <form onSubmit={handleSubmit}>
      <h1> Registration </h1>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control">
        <label>Postal Code</label>
        <input
          type="text"
          name="postalcode"
          value={state.postalcode}
          onChange={handleInputChange}
        />
      </div>
        <div className="form-control">
          <label>Password1</label>
          <input
            type="password"
            name="password1"
            value={state.password1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
        <label>Password2</label>
        <input
          type="password"
          name="password2"
          value={state.password2}
          onChange={handleInputChange}
        />
      </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>

  );
}

