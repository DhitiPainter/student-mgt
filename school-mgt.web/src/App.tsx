import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './App.css';
import { DashboardComponent } from './app/dashboard-component/DashboardComponent';
import { LayoutComponent } from './layout/layout.component';
import { LoginContainer } from './login-component';
import { RegisterContainer } from './register-component/';

interface IApp {
  isAuthenticated: boolean;
  user: any;
}

class App extends React.Component<IApp> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <ToastContainer />
        <div>
          {this.props.isAuthenticated
            ? <LayoutComponent {...this.props} />
            : null}

          <div >
            <Route exact={true} path="/" component={this.props.isAuthenticated ? DashboardComponent : LoginContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
          </div>
        </div>
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

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
