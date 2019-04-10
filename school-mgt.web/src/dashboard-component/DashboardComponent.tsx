import * as React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

interface IDashboard {
    isAuthenticated: boolean;
}

class DashboardComponent extends React.Component<IDashboard> {
    public render() {
        return (
            this.props.isAuthenticated
                ? <div>Welcome to dashboard!!</div>
                : <Redirect to="/" />
        );
    }
}

function mapStateToProps(state: any) {
    return {
        isAuthenticated: state && state.userReducer && state.userReducer.isAuthenticated ? state.userReducer.isAuthenticated : false
    };
}

const connectedDashboard = connect(mapStateToProps)(DashboardComponent);
export { connectedDashboard as DashboardComponent };