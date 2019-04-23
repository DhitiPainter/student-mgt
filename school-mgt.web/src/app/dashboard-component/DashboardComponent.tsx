import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import * as React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { PieChartColorConfig } from "./../../common/constant";

interface IDashboard {
    isAuthenticated: boolean;
}

class DashboardComponent extends React.Component<IDashboard> {


    public render() {
        const dataD: any = PieChartColorConfig;
        dataD.datasets[0].data = [350, 20, 100];
        dataD.labels = ['A', 'B', 'C'];

        return (
            this.props.isAuthenticated
                ? <div>
                    <h3>School Management</h3>
                    <table>
                        <tr>
                            <td>
                                <Card title="System Users" subTitle="Users include teachers, students, principle and admins." className="ui-card-shadow" >
                                    <Chart type="pie" data={dataD} />
                                </Card>
                            </td>
                            <td>
                                <Card title="Staff Attendance" subTitle="Attendance of staff members on an average" className="ui-card-shadow" >
                                    <Chart type="pie" data={dataD} />
                                </Card>
                            </td>
                        </tr>
                    </table>

                </div>
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