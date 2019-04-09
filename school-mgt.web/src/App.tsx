import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import { LoginContainer } from './login-component';
import { RegisterContainer } from './register-component/';
// import logo from './logo.svg';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    // const { dispatch }: any = this.props;
  }
  public render() {
    return (
      <div className="App">
        <ToastContainer />
        <header className="content-section introduction">
          <h1 className="feature-intro">School Management System</h1>
          <Router>
            <Route exact={true} path="/" component={LoginContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
          </Router>
        </header>
      </div>
    );
  }
}

const connectedApp = connect()(App);
export { connectedApp as App };
