import React from 'react';
class Hello extends React.Component {
    state = {
        count : 10,
    }
  render() {
    return (
        <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count : this.state.count + 1})}>Click Me</button>
        </>
    );
  }
}

export default Hello;
