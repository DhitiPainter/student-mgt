import * as React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { UserActions } from 'src/store/actions';
import RegisterForm from "./registerForm";

class RegisterContainer extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(values: any) {
        this.setState({ submitted: true });
        const { dispatch }: any = this.props;
        if (values.password !== values.rePassword) {
            toast.error("Passwords must be same");
            return;
        }
        if (values.userName && values.password && values.role && values.lastName && values.firstName) {
            const user = {
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
                role: values.role,
                userName: values.userName,
            }
            dispatch(UserActions.register(user));
        }
    }

    public render() {
        return (
            <div>
                <RegisterForm onSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state: any, ownProps: any) {
    // tslint:disable-next-line: no-console
    console.log("state", state, "ownprops", ownProps);
    return {
        roles: state && state.roles ? state.roles : null
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterContainer);
export { connectedRegisterPage as RegisterContainer };