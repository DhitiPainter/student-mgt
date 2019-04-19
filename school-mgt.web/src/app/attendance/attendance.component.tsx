import * as React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

interface IAttendance {
    isAuthenticated: boolean;
}

class AttendanceComponent extends React.Component<IAttendance> {
    public render() {
        return (
            this.props.isAuthenticated
                ? <div>Attendance Module</div>
                : <Redirect to="/" />
        );
    }
}

function mapStateToProps(state: any) {
    return {
        isAuthenticated: state && state.userReducer && state.userReducer.isAuthenticated ? state.userReducer.isAuthenticated : false
    };
}

const connectedDashboard = connect(mapStateToProps)(AttendanceComponent);
export { connectedDashboard as AttendanceComponent };