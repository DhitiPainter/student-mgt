import { Button } from 'primereact/button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import './login.css';

const LoginForm = (props: any) => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label>User Name&nbsp;</label>
                <Field name="userName"
                    component="input"
                    type="text"
                    placeholder="User Name" />
            </div>
            <br />
            <div>
                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Field name="password"
                    component="input"
                    type="password"
                    placeholder="Password" />
            </div>
            <br />
            <div>
                <Button label="Submit" className="p-button-raised p-button-success" type="submit" disabled={pristine || submitting} />&nbsp;&nbsp;
                <Link to="/register" className="btn btn-link">Register</Link>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'loginForm' // a unique identifier for this form
})(LoginForm)