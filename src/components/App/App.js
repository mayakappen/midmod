import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
      tricks: null
    }
  } 
  componentDidMount() {
      fetch('http://localhost:3001/api/v1/tricks')
        .then((res) => {
        return  res.json()
        })
        .then((arr) => this.setState({tricks: arr}))
        .catch(err => console.log(err))
    }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <p>{this.state.tricks}</p>
      </div>
    );
  }
}

export default App;