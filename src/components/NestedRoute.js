import React, { Fragment } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRSAOK: true,
      type: 100,
      userData: {
        name: 'Omkar',
        company: 'SungardAS'
      }
    };
  }

  render() {
    console.log(this.props);
    const { isRSAOK } = this.state;
    let comp = null;
    switch (this.props.type) {
      case 1:
        comp = isRSAOK
          ? (<this.props.component userData={this.state.userData} asset={this.props.match.params.asset} />)
          : (<div>Please complete RSA authentication</div>);
        break;
      case 2:
        comp = isRSAOK
          ? (<this.props.component userData={this.state.userData} asset={this.props.match.params.asset} />)
          : (<div>Please complete RSA authentication</div>);
        break;
      default:
        comp = (
          <div id="container">
            <div className="pageLoader">
              Loading
            </div>
          </div>
        );
        break;
    }
    return comp;
  }
}

const NestedRoute = ({ basePath = '/2f/cr' }) => {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route exact path={`${basePath}/remove_user/:asset`}
            component={(props) => <Form {...props} type={1} component={Form1} />} />
          <Route exact path={`${basePath}/add_user/:asset`}
            component={(props) => <Form {...props} type={2} component={Form2} />} />
          <Route exact path={`${basePath}`} component={Home} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

const Home = () => {
  return <h2>Home</h2>
}

export default NestedRoute
