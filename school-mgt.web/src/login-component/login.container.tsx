import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from './loginForm';

class LoginContainer extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(values: any) {
        const { dispatch } = this.props;
        if (values.userName && values.password) {
            dispatch(userActions.login(values.userName, values.password));
        }
    }

    public render() {
        return (
            <div>
                <LoginForm onSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(null)(LoginContainer);
export { connectedLoginPage as LoginContainer };
