import React, { useState } from 'react'
import '../index.css'
import validator from 'validator'
import swal from 'sweetalert'
// import { useForm } from 'react-hook-form'
function Login() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const validate = (event) => {
        event.preventDefault()
        if(email==="jvsathyakrishna18bcs@iiitkottayam.ac.in" && password === "AbCdEfGhIj"){
            swal("Login SuccessFull","","success")
        } else{
            swal("Login Failed","Invalid Login Details","error")
        }
    }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError()
            // validate(e)
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Login Page</h1>
                    <form onSubmit={validate}>
                        <input type="email" placeholder="Email" className="form-control"
                            onChange={(e) => validateEmail(e)} value={email}
                        />
                        <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
                        <input type="password" placeholder="password" className="form-control" value={password} 
                            onChange={(e) => { setPassword(e.target.value) }} 
                        />
                        <button type="submit"  className="btn btn-success" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
