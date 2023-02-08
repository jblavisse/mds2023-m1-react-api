import {useEffect, useState} from 'react';
import axios from 'axios';


function Users() {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            console.log(response.data);
          setUsers(response.data);
        })
    }, []);


    return (
        <div>
            <ul>
            {users.map(user => (
                <li key={user.id}>{user.name} ({user.email})</li>
            ))}
            </ul>
        </div>
    )
}

export default Users;