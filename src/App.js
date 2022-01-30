import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(err => console.log(err));  
  }

  
  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <h1>Random User</h1>
        
      </div>
    )
      
    
  }
}

export default App;
