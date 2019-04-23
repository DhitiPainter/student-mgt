import { Button } from 'primereact/button';
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput, renderSelect, renderTextarea } from "../../common/hocs/render-field.hoc";
import { Roles, Section } from "./../../common/enum";
import * as enumHelper from "./../../common/enum.helper";
import * as validator from "./../../common/form-validator";
import './profile.css';

const ProfileForm = (props: any) => {
    // let isSelectedRoleStudentOrTeacher: boolean = handleRolesChange;
    const rolesEnum = Roles;
    const roles = enumHelper.getNamesAndValues(Roles);
    const sections = enumHelper.getStringNamesAndValues(Section);

    const { handleSubmit, pristine, reset, submitting, initialValues } = props

    // props.initialValues.role === (rolesEnum.principal || rolesEnum.principal)
    //     ? isSelectedRoleStudentOrTeacher = false
    //     : isSelectedRoleStudentOrTeacher = true

    const isSelectedRoleStudentOrTeacher = () => {
        return (props.userProfileForm.role === rolesEnum.principal.toString() || props.userProfileForm.role === rolesEnum.admin.toString()
            ? false
            : true)
    }

    return (
        <form onSubmit={handleSubmit} defaultValue={initialValues} >
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label className="required">First Name</label>
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
                            <label className="required">Last Name</label>
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
                        <td><label className="required">Role</label></td>
                        <td>
                            <Field name="role"
                                component={renderSelect}
                                placeholder="Select user role"
                                options={roles}
                                validate={validator.required} />
                        </td>
                    </tr>
                    <tr>
                        <td><label><h3>Contact Info</h3></label></td>
                    </tr>
                    <tr>
                        <td><label className="required">Address 1</label></td>
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
                    {
                        isSelectedRoleStudentOrTeacher
                            ?
                            (<tr>
                                <td><label><h3>Academic Info</h3></label></td>
                            </tr>)
                            : null
                    }
                    {
                        isSelectedRoleStudentOrTeacher
                            ? (
                                // <div><tr>
                                //     <td><label><h3>Academic Info</h3></label></td>
                                // </tr>
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
                                            options={sections} />
                                    </td>
                                </tr>
                                // </div>
                            )
                            : null
                    }

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