import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import Joi from "joi";
import { useFormik } from "formik";

interface IErrors {
    [key: string]: string;
}

// this page demonstrates the use of Formik and joi

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({

        // assign default value to field
        initialValues: {
            email: '',
            password: '',
        },

        validate: values => {
            const errors: IErrors = {};

            const schema = Joi.object().keys({
                email: Joi.string().required().min(6).max(256),
                password: Joi.string().required().min(6).max(1024),
            });

            const { error } = schema.validate(values);

            if (error) {
                error.details.forEach(item => {
                    if (item.context) {
                        const key = item.context.key + '';
                        errors[key] = item.message;
                    }
                })
            };

            return errors;
        },

        onSubmit: values => {
            fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(json => {
                    localStorage.setItem('token', json.token);
                    navigate('/');
                })
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="p-3 form-max-w m-auto d-block"
        >

            <Title text="Login" />

            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
            </div>
            {
                formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">
                        {formik.errors.email}</div>
                ) : null
            }

            <div className="mb-3">
                <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
            </div>
            {
                formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">
                        {formik.errors.password}</div>
                ) : null
            }

            <button
                type="submit"
                className="btn btn-primary btn-lg w-100">
                Login
            </button>
        </form>
    );
}

export default Login;