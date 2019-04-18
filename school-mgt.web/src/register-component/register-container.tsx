import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { toast } from "react-toastify";
import { UserActions } from 'src/store/actions';
import RegisterForm from "./registerForm";

interface IRegisterProps {
    registerUser: any;
    user: object;
    isRegistered: boolean;
}
class RegisterContainer extends React.Component<IRegisterProps> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(values: any) {
        this.setState({ submitted: true });
        if (values.password !== values.rePassword) {
            toast.error("Passwords must be same");
            return;
        }
        if (values.userName && values.password && values.role && values.lastName && values.firstName) {
            this.props.registerUser(this.props.user);
        }
    }

    public render() {
        if (this.props.isRegistered) {
            return (<Redirect to='/' />);
        }
        return (
            <div className="login">
                <RegisterForm onSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state: any, ownProps: any) {
    return {
        isRegistered: state && state.userReducer && state.userReducer.isRegistered ? state.userReducer.isRegistered : false,
        user: state && state.form.registerForm && state.form.registerForm.values ? state.form.registerForm.values : {}
    };
}

function mapDispatchToProps(dispatch: any, ownprops: any) {
    const registerUser = (user: any) => dispatch(UserActions.register(user));
    return { registerUser }
}

const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
export { connectedRegisterPage as RegisterContainer };