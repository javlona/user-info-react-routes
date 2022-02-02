import React, { Component } from 'react';
import Home from './components/Home'
import Table from './components/Table'
import Posts from './components/Posts'
import Alert from './components/Alerts'
import User from './components/User'
import { Route, Routes, Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      deleteAlert: false,
      modal: false,
      selected: {},
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(posts => this.setState({ posts }))
  //     .catch(err => console.log(err));
  // }

  deleteHandler = (id) => {
    const filteredUsers = this.state.users.filter( user => user.id !== id)
    this.setState({ users: filteredUsers })
  }

  selectHandler = (id) => {
    const selected  = this.state.users.find( user => user.id === id)
    this.setState({ selected, modal: true })
  }



  deleteAlert = () => {
    this.setState({ deleteAlert: true })
  }
  
  render() {
    console.log(this.state);
    const { users, posts } = this.state;
    
    return (
      <div className="App">
        
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/users" element={ <Table 
            users = { users }
            deleteHandler = { this.deleteHandler }
            selectHandler = { this.selectHandler }/> }/>
          <Route path="/user:id" element={ <User /> } />
        </Routes>
        
        <Alert />
      </div>
    )
      
    
  }
}

export default App;
