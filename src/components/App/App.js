import { Component } from 'react';
import './App.css';

class App extends Component {
      state = {
      tricks: []
    }
  fetchTricks() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(resp => resp.json())
      .then((obj) => {
        this.setState({
          tricks: obj
        })
      })
    }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;