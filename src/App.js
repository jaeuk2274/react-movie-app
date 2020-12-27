import React from 'react';
import prototypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1}));
  }
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate - I just updated");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
  render () {
    console.log("I'm rendering");
    return (
      <div>
        <h2>This number is {this.state.count}</h2>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
