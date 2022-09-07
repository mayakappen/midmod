import { Component } from 'react';
import './App.css';
import Trick from './Trick.js'

class App extends Component {
  constructor() {
    super()
      this.state = {
      tricks: null
    }
  } 

fetchTricks() {
  fetch('http://localhost:3001/api/v1/tricks')
    .then((res) => res.json())
    .then((res) => this.setState({tricks: res}))
}

componentDidMount() {
  this.fetchTricks()
  let tricks = this.state.tricks.map((trick) => <Trick id={trick.id} name={trick.name} stance={trick.stance} obstacle={trick.obstacle} tutorial={trick.tutorial} />)
  return tricks

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