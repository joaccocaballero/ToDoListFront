import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AdminLoginForm = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginURL = 'http://localhost:8080/loginAdmin'
    let navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async (email, password) => {
        let user = {
            email: email,
            password: password,
        }
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        if (response.status !== 200) {
            alert('Data entered is not valid')
        }
        const data = await response.json()
        if (data.token) {
            localStorage.setItem('adminToken', data.token)
            navigate("/adminManager")
        }
    }

    const handleButton = () => {
        if (email !== "" && password !== "") {
            login(email, password)
        }
    }

    return(
        <form className="loginform d-flex flex-column justify-content-center" onSubmit={(e) => e.preventDefault()}>
            <h2>Administrator</h2>
            <div className="mb-3 mt-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={handleEmail} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onInput={handlePassword} required />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleButton}>Log In</button>
        </form>
    )
}


export default AdminLoginForm;