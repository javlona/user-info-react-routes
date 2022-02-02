import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <div>
            <h1>Users</h1>
            <p>Here you can have a look on how React Router works</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aliquam neque accusantium praesentium at quidem, vel harum autem vitae minus est corrupti adipisci ducimus beatae quae? Reiciendis itaque eum repellat mollitia cum, iusto, nihil corporis unde, nostrum modi error assumenda possimus consequatur exercitationem totam molestiae ducimus a illo. Fugiat, est!</p>
            <Link to="/">Home</Link>
            <Link to="users">Users</Link>
        </div>
    )
  }
}

export default Home;
