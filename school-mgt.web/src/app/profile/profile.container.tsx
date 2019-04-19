import * as React from "react";
import { connect } from "react-redux";
// import * as userActions from "./../../store/actions/userActions";
import ProfileForm from './ProfileForm';

interface IProfileProps {
    updateUserProfile: any;
    user: object;
}

class ProfileContainer extends React.Component<IProfileProps> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(values: any) {
        this.setState({ submitted: true });
        if (values.userName && values.password) {
            this.props.updateUserProfile(this.props.user);
        }
    }

    public render() {
        return (
            <div className="profile">
                <h2>Update Profile</h2><hr />
                <ProfileForm onSubmit={this.handleSubmit} {...this.props} />
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
    // const loginUser = (user: any) => dispatch(userActions.login(user));
    // const updateUserProfile = (user: any) => dispatch(userActions.)
    // return { updateUserProfile }
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
export { connectedLoginPage as ProfileContainer };