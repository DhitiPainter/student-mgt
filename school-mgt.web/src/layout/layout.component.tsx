import * as React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { CoreActions } from 'src/store/actions';
import { DashboardComponent } from 'src/app/dashboard-component/DashboardComponent';
import * as userActions from "./../store/actions/userActions";
import Header from './header/header.component';
import './layout.css';
import SideBar from './side-bar/side-bar.component';

interface ILayout {
    isAuthenticated: boolean;
    sideBarPanel: any[];
    headerItems: any[];
    getRoles: any;
    getSidebarPanel: any;
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
            <div className="layout">
                <Header {...this.props} logout={this.handleLogout} />
                <div className="side-bar">
                    <SideBar {...this.props} />
                    <div className="container">
                        Container
                    </div>
                </div>
                <Router>
                    <Route path="/dashboard" component={DashboardComponent} />
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        headerItems: [],
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