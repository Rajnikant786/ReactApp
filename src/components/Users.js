import React , {useEffect, useState} from 'react'
import '../App.css';
import axios from 'axios'

const Users = () => {

    const [usersInfo, setUsers] = useState([]);

    // const getUsers = async () => {
    //     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await resp.json();
    //     setUsers(data)

    // }

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            setUsers(resp.data)
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    console.log('users', usersInfo)
    return (
        <>
        <div className="card">
            <div className="card_header">User List</div>
            <div className="card_body">
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Address</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersInfo.map(item => 
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            {item.name}
                                            <h5><span>Email :</span>{item.email}</h5>
                                        </td>
                                        <td>{item.username}</td>
                                        <td>
                                            <h4>{item.address.street}</h4>
                                            <h5><span>City :</span>{item.address.city}</h5>
                                            <h6><span>Zipcode :</span>{item.address.zipcode}</h6>
                                        </td>
                                        <td>
                                            <h4>{item.company.name}</h4>
                                            <p>{item.company.bs}</p>
                                        </td>
                                    </tr>                              
                            )
                            // usersInfo.map(item => {
                            //     return (
                            //         <tr key={item.id}>
                            //             <td>{item.id}</td>
                            //             <td>{item.name}</td>
                            //             <td>{item.username}</td>
                            //         </tr>
                            //     )                                
                            // })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Users;
