import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

function User() {
    const [user, setUsers] = useState({});

    const { id } = useParams()
    console.log(id);
    
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err))
      }, [])
      
      const backButton = () => window.history.back()
      
    console.log(user);

  return <div>
      <h1>User info</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address?.city}</p>
      <p>Phone: {user.phone}</p>
      <p>Work: {user.company?.name}</p>
      <button onClick={ backButton }>back</button>
  </div>
}

export default User;