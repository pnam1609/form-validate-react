import React, { useRef, useState } from 'react'
import {
    validateOneElement,
    isRequired,
    isEmail,
    isPassword,
    isConfirmPaswword,
    minLength
} from './validator'

function Form() {
    const [dataForm, setDataForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [msgError, setMsgError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const formRef = useRef({})

    const listElement = {
        username: [isRequired()],
        email: [isRequired(), isEmail()],
        password: [isRequired(), minLength(6), isPassword()],
        confirmPassword: [isRequired(), minLength(6), isConfirmPaswword(dataForm.password)]
    }

    const handleSubmit = event => {
        event.preventDefault()
        let flag = true
        const msg = {}
        for (const [key, value] of Object.entries(listElement)) {
            const res = validateOneElement(formRef.current[key], value)
            if (res) flag = false
            msg[key] = res ?? ""
        }

        setMsgError(msg)
        if (flag) {
            //Call API
            console.log(dataForm);
        }
    }

    const handleBlur = e => {
        const res = validateOneElement(formRef.current[e.target.name], listElement[e.target.name]) ?? ""
        setMsgError({ ...msgError, [e.target.name]: res })
    }

    const hanldeChange = e => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const handleInput = e => {
        const parentElement = e.target.parentElement
        if (parentElement.classList.contains("invalid")) {
            parentElement.classList.remove("invalid")
        }
        setMsgError({ ...msgError, [e.target.name]: "" })
    }

    return (
        <div className="container">
            <form id="form" onSubmit={handleSubmit}>
                <h2 className="header">REGISTER WITH US</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"
                        value={dataForm.username}
                        onChange={hanldeChange}
                        onBlur={handleBlur}
                        onInput={handleInput}
                        ref={el => formRef.current.username = el} />
                    <small className="form-message">{msgError.username}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email"
                        value={dataForm.email}
                        onChange={hanldeChange}
                        onBlur={handleBlur}
                        onInput={handleInput}
                        ref={el => formRef.current.email = el} />
                    <small className="form-message">{msgError.email}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"
                        onChange={hanldeChange}
                        onBlur={handleBlur}
                        onInput={handleInput}
                        ref={el => formRef.current.password = el} />
                    <small className="form-message">{msgError.password}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm password</label>
                    <input type="password" className="form-control" id="password2" placeholder="Enter password again" name="confirmPassword"
                        onChange={hanldeChange}
                        onBlur={handleBlur}
                        onInput={handleInput}
                        ref={el => formRef.current.confirmPassword = el} />
                    <small className="form-message">{msgError.confirmPassword}</small>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
