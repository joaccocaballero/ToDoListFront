import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    const [firstName, setFN] = useState("")
    const [lastName, setLN] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passConfirmation, setPC] = useState("")
    const registerURL = 'https://joacoservices-com.onrender.com/auth/register'

    let navigate = useNavigate();

    const handleFN = (e) => {
        setFN(e.target.value)
    }
    const handleLN = (e) => {
        setLN(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePC = (e) => {
        setPC(e.target.value)
    }


    const register = (firstName, lastName ,email, password) => {
        let newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
        fetch(registerURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
    }

    const handleButton = () => {
        if (password === passConfirmation) {
            register(firstName, lastName, email, password)
            navigate("/")  

        }
        else {
            alert('Your passwords do not match.')
        }
    }

    return (
        <form className="loginform d-flex flex-column justify-content-center" onSubmit={(e) => e.preventDefault()}>
            <h2>Sign Up</h2>
            <div className="mb-3 d-flex gap-2">
                <div className="d-flex flex-column">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control"  onInput={handleFN} />
                </div>
                <div className="d-flex flex-column">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control"  onInput={handleLN} />
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"  aria-describedby="emailHelp" onInput={handleEmail} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  onInput={handlePassword} />
                <label className="form-label">Re-enter your password</label>
                <input type="password" className="form-control"  onInput={handlePC} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleButton}>Submit</button>
        </form>
    )
}

export default SignUp;