import { Button } from 'primereact/button';
import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import { DashboardComponent } from './dashboard-component/DashboardComponent';
import { LoginContainer } from './login-component';
import { RegisterContainer } from './register-component/';
import * as userActions from "./store/actions/userActions";

interface IApp {
  isAuthenticated: boolean;
  user: any;
  logoutUser: any;
}

class App extends React.Component<IApp> {
  constructor(props: any) {
    super(props);
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
            <Route path="/dashboard" component={DashboardComponent} />
            {this.props.isAuthenticated
              ? <span>
                <Button label="Logout" className="p-button-raised p-button-success" onClick={this.props.logoutUser} />
              </span>
              : <span />}
          </Router>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state && state.userReducer && state.userReducer.isAuthenticated ? state.userReducer.isAuthenticated : false,
    user: state && state.form.loginForm && state.form.loginForm.values ? state.form.loginForm.values : {}
  };
}

function mapDispatchToProps(dispatch: any) {
  const logoutUser = () => dispatch(userActions.logout());
  return { logoutUser }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
