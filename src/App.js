import React, { Component } from 'react';
import Table from './components/Table'
import Posts from './components/Posts'
import { Route, Routes, Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
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

  deleteHandler = () => {
    
  }
  
  render() {
    console.log(this.state);
    const { users, posts } = this.state;
    
    return (
      <div className="App">
        <h1>Users</h1>
        <h1>Posts</h1>

        <Table users = { users }/>
        {/* <Posts data = { posts } /> */}
      </div>
    )
      
    
  }
}

export default App;
