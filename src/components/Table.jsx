import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Table extends Component {
    render() {
        const { users, deleteHandler, selectHandler } = this.props;

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
                                    <td>
                                        <Link to={`/users/${user.id}`}>
                                            { user.name }
                                        </Link>
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
}

export default Table;
