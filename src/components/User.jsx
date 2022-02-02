import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

function User() {
    const [users, setUsers] = useState([]);

    const id = useParams()
    console.log(id);

  return <div>
      <h1>User info</h1>
  </div>
}

export default User;