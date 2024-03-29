import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = ({loaderHandler}) => {
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
        loaderHandler(true)
        fetch(process.env.REACT_APP_API_URL+'/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        })
        .then((data) => {
            if (data.status !== 400) {
                loaderHandler(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User created successfully!',
                    showConfirmButton: false,
                    timer: 1200
                })
                navigate("/")
            }
            else {
                loaderHandler(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username chosen is already in use, please try a different one!',
                })
            }
        })
        
    }

    const handleButton = () => {
        if (password === passConfirmation) {
            register(username, password)
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your passwords do not match!',
            })
        }
    }

    return (
        <form className="loginform d-flex flex-column justify-content-center" onSubmit={(e) => e.preventDefault()}>
            <h2>Sign Up</h2>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="email" className="form-control"  aria-describedby="emailHelp" onInput={handleUsername} />
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