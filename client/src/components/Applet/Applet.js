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
    fetch("http://localhost:3002/api/rooms/1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log('error in fetching data: ', error);
        }
      )
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
