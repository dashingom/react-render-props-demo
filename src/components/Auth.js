import React from 'react';
import {
  Redirect
} from "react-router-dom";
import { Modal, ModalBody, ModalHeader, Spinner } from 'reactstrap';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      isAuthenticated: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    fakeAuth.authenticate(() => {
      this.setState({ isAuthenticated: true, modal: false });
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    console.log(this.props);
    const { isAuthenticated } = this.state;
    const from = this.props.match.path;

    if (isAuthenticated) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <Modal backdrop={false} isOpen={this.state.modal}>
          <ModalHeader><Spinner color="primary" /> PingId Authentication</ModalHeader>
          <ModalBody>
            <p>Please authenticate using PingID App installed on your mobile device.</p>
            <p>The PingID app must be installed on your mobile device and registered with Sungard SSO to complete authentication.</p>
            <p>For details on how to register with PingID, please see the
              <a
                href="https://community.sungardas.com/docs/DOC-50466"
                target="_blank" rel="noopener noreferrer"> PingID FAQ</a>
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export const fakeAuth = {
  authenticate(cb) {
    localStorage.setItem('isAuthenticated', true);
    setTimeout(cb, 3000); // fake async
  },
  signout(cb) {
    localStorage.setItem('isAuthenticated', false);
    setTimeout(cb, 100);
  }
};

export default Auth;