import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import * as userActions from "./../store/actions/userActions";
import LoginForm from './loginForm';

interface ILoginProps {
    loginUser: any;
    user: object;
    isAuthenticated: boolean;
}

class LoginContainer extends React.Component<ILoginProps> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(values: any) {
        this.setState({ submitted: true });
        if (values.userName && values.password) {
            this.props.loginUser(this.props.user);
        }
    }

    public render() {
        return (
            this.props.isAuthenticated
                ? <Redirect to='/dashboard' />
                : <div>
                    <LoginForm onSubmit={this.handleSubmit} {...this.props} />
                </div>
        );
    }
}

function mapStateToProps(state: any, ownProps: any) {
    return {
        isAuthenticated: state && state.userReducer && state.userReducer.isAuthenticated ? state.userReducer.isAuthenticated : false,
        user: state && state.form.loginForm && state.form.loginForm.values ? state.form.loginForm.values : {}
    };
}

function mapDispatchToProps(dispatch: any, ownprops: any) {
    const loginUser = (user: any) => dispatch(userActions.login(user));
    return { loginUser }
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export { connectedLoginPage as LoginContainer };
