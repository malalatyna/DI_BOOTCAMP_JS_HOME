import React , { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function List() {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const deconnect = () => {
    localStorage.removeItem('user');
    navigate("/");
  }


  React.useEffect(() => {
    const storedEmail = localStorage.getItem('user');
    if (!storedEmail) {
      navigate("/");
    }
  }, []);

  React.useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3005/lists_users'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data); 
     
      } catch (error) {
        console.error('Error fetching data:', error);
     
      }
    };

    fetchData(); 
  }, []);

  return (
  
    <div>
          <h1>Data from API</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Postal code</th>
                {/* Ajoutez ici d'autres en-têtes de colonnes si nécessaire */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.postal_code}</td>
                  {/* Ajoutez ici d'autres cellules de données en fonction de votre API */}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={deconnect}> Deconnexion </button>
        </div>
  );
}

export default List;