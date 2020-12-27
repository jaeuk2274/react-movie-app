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
  render () {
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
