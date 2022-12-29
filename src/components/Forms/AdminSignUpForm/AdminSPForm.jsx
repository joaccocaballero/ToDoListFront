import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AdminSPForm = ()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passConfirmation, setPC] = useState("")

    let navigate = useNavigate();

   
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePC = (e) => {
        setPC(e.target.value)
    }

    const register = (username, password) => {
        let newUser = {
            username: username,
            password: password
        }
        fetch(process.env.REACT_APP_API_URL+'/auth/registerAdmin', {
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
            register(username, password)
            navigate("/adminForm")
        }
        else {
            alert('Your passwords do not match.')
        }
    }

    return(
        <form className="loginform d-flex flex-column justify-content-center" onSubmit={(e) => e.preventDefault()}>
            <h2>New Administrator User</h2>
            <div className="mb-3">
                <label className="form-label">Admin Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={handleUsername}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onInput={handlePassword} />
                <label className="form-label">Re-enter your password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onInput={handlePC} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleButton} >Submit</button>
        </form> 
    )
}

export default AdminSPForm;