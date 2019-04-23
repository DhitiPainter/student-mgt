import * as React from 'react';

const renderInput = ({
    input,
    placeholder,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
                ((error && <span className="error">{error}</span>) ||
                    (warning && <span className="warn">{warning}</span>))}
        </div>
    )

const renderTextarea = ({
    input,
    placeholder,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <textarea {...input} placeholder={placeholder} type={type} />
            {touched &&
                ((error && <span className="error">{error}</span>) ||
                    (warning && <span className="warn">{warning}</span>))}
        </div>
    )

const renderSelect = ({
    input,
    placeholder,
    type,
    options,
    meta: { touched, error, warning }
}) => (
        <div>
            <select {...input} placeholder={placeholder} type={type} >
                <option value=''>-- {placeholder} --</option>
                {
                    options
                        ? options.map((el: any) =>
                            <option value={el.value} key={el.value}> {el.name} </option>)
                        : null
                }
            </select>
            {touched &&
                ((error && <span className="error">{error}</span>) ||
                    (warning && <span className="warn">{warning}</span>))}
        </div>
    )

export { renderInput, renderTextarea, renderSelect };