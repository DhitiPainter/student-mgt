import { Button } from 'primereact/button';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput, renderSelect, renderTextarea } from "../../common/hocs/render-field.hoc";
import { Section } from "./../../common/constant";
import { Roles } from "./../../common/enum";
import * as enumHelper from "./../../common/enum.helper";
import * as validator from "./../../common/form-validator";
import './profile.css';

const ProfileForm = (props: any) => {
    const roles = enumHelper.getNamesAndValues(Roles);
    const { handleSubmit, pristine, reset, submitting, initialValues } = props
    return (
        <form onSubmit={handleSubmit} defaultValue={initialValues} >
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>First Name</label>
                        </td>
                        <td>
                            <Field name="firstName"
                                component={renderInput}
                                type="text"
                                placeholder="First Name"
                                validate={[validator.required, validator.maxLength50]}
                                warn={validator.alphaNumeric} />
                        </td>
                        <td>
                            <label>Last Name</label>
                        </td>
                        <td>
                            <Field name="lastName"
                                component={renderInput}
                                type="text"
                                placeholder="Last Name"
                                validate={[validator.required, validator.maxLength50]} />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Role</label></td>
                        <td>
                            <Field name="role"
                                component="select"
                                placeholder="Select user role"
                                options={roles}
                                validate={validator.required} />
                        </td>
                    </tr>
                    <tr>
                        <td><label><h3>Contact Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label>Address 1</label></td>
                        <td>
                            <Field name="address1"
                                component={renderInput}
                                type="text"
                                placeholder="Address line 1"
                                validate={validator.required} />
                        </td>
                        <td><label>Address 2</label></td>
                        <td>
                            <Field name="address2"
                                component={renderInput}
                                type="text"
                                placeholder="Address line 2" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Contact Number</label></td>
                        <td>
                            <Field name="number"
                                component={renderInput}
                                type="text"
                                placeholder="Contact number"
                                validate={validator.phoneNumber} />
                        </td>
                        <td><label>Email</label></td>
                        <td>
                            <Field name="email"
                                component={renderInput}
                                type="text"
                                placeholder="Email"
                                validate={validator.email} />
                        </td>
                    </tr>
                    <tr>
                        <td><label><h3>Personal Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label>Hobbies</label></td>
                        <td>
                            <Field name="hobbies"
                                component={renderTextarea}
                                type="text"
                                placeholder="Hobbies" />
                        </td>
                        <td><label>Blood Group</label></td>
                        <td>
                            <Field name="bloodGroup"
                                component={renderInput}
                                type="text"
                                placeholder="Blood Group"
                                warn={validator.alphaNumeric} />
                        </td>
                    </tr>
                    <tr>
                        <td><label><h3>Academic Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label>Class</label></td>
                        <td>
                            <Field name="class"
                                component={renderInput}
                                type="text"
                                placeholder="Class" />
                        </td>
                        <td><label>Section</label></td>
                        <td>
                            <Field name="section"
                                component={renderSelect}
                                placeholder="Select section"
                                options={Section} />
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
    enableReinitialize: true,
    form: 'profileForm', // a unique identifier for this form        
})(ProfileForm)