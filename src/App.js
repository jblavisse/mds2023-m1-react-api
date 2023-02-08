import {Routes,Route, Link, NavLink} from 'react-router-dom';

import './App.css';
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";


import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Layout from './Layout';

function App() {
  return (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />

              <Route path="tasks" element={<Tasks/>}/>
              <Route path="tasks/:id" element={<TaskDetail/>} />

              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserDetail/>} />

              <Route path="contact" element={<Contact />} />
            </Route>

          </Routes>
  );
}

export default App;
