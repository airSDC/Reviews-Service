import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Applet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'world'
    };
  }
  componentDidMount() {
    fetch("/api/rooms/1")
      .then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error in fetching:', error));
  }
  render() {
    return (
      <h1>
        Hello {this.state.hello} <FontAwesome name="rocket" size="2x" />
      </h1>
    );
  }
}

export default Applet;
