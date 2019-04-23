import * as React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

import { AttendanceComponent } from 'src/app/attendance/attendance.component';
// import { CoreActions } from 'src/store/actions';
import { DashboardComponent } from 'src/app/dashboard-component/DashboardComponent';
import { ProfileContainer } from 'src/app/profile';

import * as userActions from "./../store/actions/userActions";
import Header from './header/header.component';
import './layout.css';
import SideBar from './side-bar/side-bar.component';

interface ILayout {
    isAuthenticated: boolean;
    sideBarPanel: any[];
    headerItems: any[];
    // getRoles: any;
    // getSidebarPanel: any;
    logoutUser: any;
}

class LayoutComponent extends React.Component<ILayout> {

    constructor(props: any) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        // this.props.getRoles();
        // this.props.getSidebarPanel();
    }

    public handleLogout() {
        this.props.logoutUser();
    }

    public render() {
        return (
            this.props.isAuthenticated ?
                <div className="layout-wrapper">
                    <Header {...this.props} logout={this.handleLogout} />
                    <SideBar {...this.props} />
                    <div className="layout-main">
                        <Route path="/dashboard" component={DashboardComponent} />
                        <Route path="/attendence" component={AttendanceComponent} />
                        <Route path="/editprofile" component={ProfileContainer} />
                    </div>
                </div>
                : <Redirect to="/" />
        );
    }
}

function mapStateToProps(state: any) {
    return {
        headerItems: [
            {
                icon: 'pi pi-fw pi-user',
                items: [{
                    command: () => {
                        window.location.pathname = "/editprofile"
                    },
                    icon: 'pi pi-fw pi-pencil',
                    label: 'Edit Profile'
                },
                {
                    command: () => {
                        // handleLogout();
                    },
                    icon: 'pi pi-fw pi-sign-out',
                    label: 'Logout'
                }]
            }

        ],
        isAuthenticated: state && state.userReducer && state.userReducer.isAuthenticated ? state.userReducer.isAuthenticated : false,
        roles: state && state.coreReducer && state.coreReducer.roles ? state.coreReducer.roles : {},
        sideBarPanel: [
            {
                command: () => {
                    // return (<Redirect to="/dashboard" />)
                    window.location.pathname = "/dashboard"
                },
                icon: 'pi pi-fw pi-home',
                label: 'Dashboard'
            },
            {
                command: () => {
                    window.location.pathname = "/attendence"
                },
                icon: 'pi pi-fw pi-table',
                label: 'Attendance'
            },
        ]
        // sidebarPanel: state && state.coreReducer && state.coreReducer.sideBarPanel ? state.coreReducer.sideBarPanel : []
    };
}

function mapDispatchToProps(dispatch: any) {
    // const getRoles = () => dispatch(CoreActions.getRoles());
    // const getSidebarPanel = () => dispatch(CoreActions.getSideBarPanel());
    // return { getRoles, getSidebarPanel }
    const logoutUser = () => dispatch(userActions.logout());
    return { logoutUser }
}

const connectedLayout = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
export { connectedLayout as LayoutComponent };