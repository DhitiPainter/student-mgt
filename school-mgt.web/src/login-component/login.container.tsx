import * as React from "react";
import { connect } from "react-redux";
import * as userActions from "./../store/actions/userActions";
import LoginForm from './loginForm';

class LoginContainer extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(values: any) {
        this.setState({ submitted: true });
        const { dispatch }: any = this.props;
        if (values.userName && values.password) {
            const user = { userName: values.userName, password: values.password }
            dispatch(userActions.login(user));
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

// function mapStateToProps(state: any) {
//     const { loggingIn }: any = state.authentication;
//     return {
//         loggingIn
//     };
// }

const connectedLoginPage = connect()(LoginContainer);
export { connectedLoginPage as LoginContainer };
// export default connect()LoginContainer;
