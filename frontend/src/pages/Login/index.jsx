import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState('');

  // Gère les changements dans les champs du formulaire
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Mise à jour de l'état avec les valeurs saisies par l'utilisateur
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut (rechargement de la page)
    console.log(state); // Affiche l'état contenant l'adresse email et le mot de passe dans la console
   
  const validEmail = "malala@gmail.com";
  const validPassword = "1234";

    if (state.email === validEmail && state.password === validPassword) {
      navigate("/dashboard");
      window.localStorage.setItem("user",state.email);
    } else {
      setError("Adresse email ou mot de passe incorrect.");
    }
  };

  React.useEffect(() => {
    const storedEmail = localStorage.getItem('user');
    if (storedEmail) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ color: "red" }}>
            {error}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
       
      </form>
     
      
    </div>
  );
};

export default Login;
