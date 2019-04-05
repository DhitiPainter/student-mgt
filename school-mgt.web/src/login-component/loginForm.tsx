import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props: any) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name</label>
                <div>
                    <Field name="userName"
                        component="input"
                        type="text"
                        placeholder="User Name" />
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field name="password"
                        component="input"
                        type="password"
                        placeholder="User Name" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'loginForm' // a unique identifier for this form
})(LoginForm)