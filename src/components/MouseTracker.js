import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    );
  }
}

export default MouseTracker;