import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import './profile.css';

const ProfileForm = (props: any) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
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
                        <td><label><h3>Contact Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label>Address 1</label></td>
                        <td>
                            <Field name="address1"
                                component="input"
                                type="text"
                                placeholder="Address line 1" />
                        </td>
                        <td><label>Address 2</label></td>
                        <td>
                            <Field name="address2"
                                component="input"
                                type="text"
                                placeholder="Address line 2" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Contact Number</label></td>
                        <td>
                            <Field name="number"
                                component="input"
                                type="number"
                                placeholder="Contact number" />
                        </td>
                        <td><label>Email</label></td>
                        <td>
                            <Field name="email"
                                component="input"
                                type="text"
                                placeholder="Email" />
                        </td>
                    </tr>
                    <tr>
                        <td><label><h3>Personal Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label>Hobbies</label></td>
                        <td>
                            <Field name="hobbies"
                                component="textarea"
                                type="text"
                                placeholder="Hobbies" />
                        </td>
                        <td><label>Blood Group</label></td>
                        <td>
                            <Field name="bloodGroup"
                                component="input"
                                type="text"
                                placeholder="Blood Group" />
                        </td>
                    </tr>
                    <tr>
                        <td><label><h3>Academic Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label>Class</label></td>
                        <td>
                            <Field name="class"
                                component="input"
                                type="text"
                                placeholder="Class" />
                        </td>
                        <td><label>Section</label></td>
                        <td>
                            <Field name="section"
                                component="input"
                                type="text"
                                placeholder="Section" />
                        </td>
                    </tr>
                    <tr>
                        <td /><td /><td />
                        <td>
                            <Button label="Update Profile" className="p-button-raised p-button-success" type="submit" disabled={pristine || submitting} />&nbsp;&nbsp;
                            <Button label="Clear Values" className="p-button-raised p-button-success" type="button" onClick={reset} disabled={pristine || submitting} />&nbsp;&nbsp;
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default reduxForm({
    form: 'profileForm' // a unique identifier for this form
})(ProfileForm)