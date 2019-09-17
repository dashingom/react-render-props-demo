import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, Spinner } from 'reactstrap';

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    /* setInterval(() => {
      this.setState({
        modal: false
      })
    }, 3000); */
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Launch Modal</Button>
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

export default CustomModal;