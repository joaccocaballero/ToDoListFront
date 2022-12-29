import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({loaderHandler})=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const loginURL = 'https://joacoservices-com.onrender.com/auth/login'
    let navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async (username, password) => {
        let user = {
            username: username,
            password: password,
        }
        loaderHandler(true)
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        if(response.status!==200){
            alert('Data entered is not valid')
        }
        const data = await response.json()
        if (data.token){
            loaderHandler(false)
            console.log(data)
            const names = 'Welcome ' + data.username + '!'
            localStorage.setItem('userToken',data.token)
            localStorage.setItem('userNames', names)
            navigate("/personalList")             
        }
    }
    const handleButton = ()=>{
        if (username !== "" && password !== ""){
            login(username, password)
        }
    }
    return(
        <form className="loginform d-flex flex-column justify-content-center" onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" onInput={handleUsername} required/>
                    <div id="usernameHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onInput={handlePassword} required/>
                
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleButton}>Log In</button>
            <div className="buttonSign">
                <Link to={'/adminForm'}>
                    <button type="button" className="btn btn-outline-light">Sign in as Admin</button>
                </Link>
                <Link to={'/spForm'}>
                    <button type="button" className="btn btn-outline-light">Sign Up</button>
                </Link>
            </div>
        </form>
    )
}

export default Login;