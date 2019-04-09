import { Button } from 'primereact/button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Roles } from "./../common/enum";
import * as enumHelper from "./../common/enum.helper";
import './../login-component/login.css';

const RegisterForm = (props: any) => {
    const roles = enumHelper.getNamesAndValues(Roles);
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>User Name</label>
                        </td>
                        <td>
                            <Field name="userName"
                                component="input"
                                type="text"
                                placeholder="User Name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>First Name</label>
                        </td>
                        <td>
                            <Field name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Last Name</label>
                        </td>
                        <td>
                            <Field name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Role type</label>
                        </td>
                        <td>
                            <Field name="role"
                                component="select"
                                placeholder="Select user role" >
                                <option />
                                {
                                    roles.map((el: any) => <option value={el.value} key={el.value}> {el.name} </option>)
                                }
                            </Field>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password</label>
                        </td>
                        <td>
                            <Field name="password"
                                component="input"
                                type="password"
                                placeholder="Enter password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Re-type Password</label>
                        </td>
                        <td>
                            <Field name="rePassword"
                                component="input"
                                type="password"
                                placeholder="re-type password" />
                        </td>
                    </tr>
                    <tr />
                </tbody>
            </table>
            <div>
                <Button label="Register" className="p-button-raised p-button-success" type="submit" disabled={pristine || submitting} />&nbsp;&nbsp;
                <Button label="Clear Values" className="p-button-raised p-button-success" type="button" onClick={reset} disabled={pristine || submitting} />&nbsp;&nbsp;
                <Link to="/" className="btn btn-link">Sign-in</Link>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'registerForm' // a unique identifier for this form
})(RegisterForm)