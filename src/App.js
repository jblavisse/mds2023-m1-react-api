import {Routes,Route} from 'react-router-dom';

import './App.css';
import Users from "./exo1/Users";
import Tasks from "./exo1/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tasks/>} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
}

export default App;
