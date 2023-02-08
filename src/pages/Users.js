import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
                <li key={user.id}>
                    {user.name} ({user.email})
                    <Link to={`/users/${user.id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Voir
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Users;