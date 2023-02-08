import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function UserDetail() {
  const {id} = useParams();
  const [user,setUser] = useState({});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    .then(res => {
        setUser(res.data)
    })
  }, [])


  return (
    <div>
        <h1>Utilisateur {user?.name}</h1>

        <ul>
            <li>Email: {user?.email}</li>
            <li>Site web: {user?.website}</li>
            <li>Société: {user?.company?.name} </li>
        </ul>
    </div>
  )
}

export default UserDetail;