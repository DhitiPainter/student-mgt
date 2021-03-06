import * as React from "react";
import { connect } from "react-redux";
import { LocalStorage } from 'src/common/constant';
import * as localStorageService from "./../../services/localstorage.service";
import { ProfileActions } from "./../../store/actions";
import ProfileForm from './ProfileForm';

interface IProfileProps {
    updateUserProfile: any;
    getUserProfile: any;
    userProfileForm: object;
}

class ProfileContainer extends React.Component<IProfileProps> {
    public user: any;
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.user = localStorageService.getLocalStorageObject(LocalStorage.user);
        this.props.getUserProfile(this.user.id)
    }

    public handleSubmit(values: any) {
        this.setState({ submitted: true });
        if (values) {
            this.props.updateUserProfile(this.props.userProfileForm, this.user.id);
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

function mapStateToProps(state: any, ownProps: any) {
    return {
        initialValues: state && state.profileReducer && state.profileReducer.userDetails ? state.profileReducer.userDetails : {},
        isAuthenticated: state && state.userReducer && state.userReducer.isAuthenticated ? state.userReducer.isAuthenticated : false,
        userProfileForm: state && state.form.profileForm && state.form.profileForm.values ? state.form.profileForm.values : {},
    };
}

function mapDispatchToProps(dispatch: any) {
    const getUserProfile = (userId: any) => dispatch(ProfileActions.getProfile(userId));
    const updateUserProfile = (user: any, userId: any) => dispatch(ProfileActions.updateProfile(user, userId));
    return { getUserProfile, updateUserProfile }
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
export { connectedLoginPage as ProfileContainer };