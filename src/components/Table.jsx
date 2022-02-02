import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Table({ users, deleteHandler, selectHandler }) {

    const navigate = useNavigate()
    const gateHandler = (id) => {
        navigate(`/users/${id}`)
    }
    console.log('table');

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td onClick={() => gateHandler(user.id) }>
                                    {user.name}
                                </td>
                                <td>{ user.email }</td>
                                <td>{ user.phone }</td>
                                <td>{ user.address.city }</td>
                                <td>
                                    <button onClick={ () => deleteHandler(user.id) }>delete</button>
                                    <button onClick={ () => selectHandler(user.id) }>edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/">Back</Link>
        </>
    )
}

export default Table;
