import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div> 
  );
}
}

export default App;
