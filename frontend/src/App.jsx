import { Route, Routes} from 'react-router-dom'
import List from "./pages/List";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./app.css";


export default function App() {

  return (
    <div className="App">
 
      <div> 
        <Routes> 
          <Route index element={<Login />} />
          <Route path="dashboard" element={<List/>} /> 
          <Route path="create-user" element={<Register/>} /> 
          <Route path="update-user" element={<Register/>} /> 
        </Routes>
      </div>  
   
    </div>
  );
}

