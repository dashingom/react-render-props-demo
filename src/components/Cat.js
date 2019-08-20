import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpeg" style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: '50px' }}
        alt="Cat" />
    );
  }
}

export default Cat;