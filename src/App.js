import React, { Component } from 'react';
import Table from './components/Table'
import { Route, Routes, Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => console.log(err));  
  }

  
  render() {
    console.log(this.state);
    const { users } = this.state;
    
    return (
      <div className="App">
        <h1>User Info</h1>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Table users = { users }/>
      </div>
    )
      
    
  }
}

export default App;
