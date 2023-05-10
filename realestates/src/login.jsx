import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login_style.css';
// import Userhome from './userpages/userhome';


const Login = (props) => {

    const [ user, setUser] = useState({
        email: "",
        password: ""

    });
    // const[token,setToken] = useState();

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }
    const navigate = useNavigate();
    const login = () => {
        axios.post('http://localhost:8000/login',user)
        .then(res => {
            // if(res.data === 'Login Success'){
            //     alert("User Login Successfully")
            //     navigate('/userhome')
                
            // }
            // else if(res.data === 'Login Admin'){
            //     alert("Admin Login Successfully")
            //     navigate('/adminhome');
            // }
            // else if(res.data === 'Login Agent'){
            //     alert("Agent Login Successfully")
            //     navigate('/agenthome');
            // }
            // else{
            //     alert("Invalid Input")
            //     navigate('/login');
            // }
            
            // setToken(res.data);
            console.log(res.data);
            const{token} = res.data;
            window.localStorage.setItem('token', token);
            navigate('/userhome')
        })
    }


    return (
    <>
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">

        

        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card1 pb-5">
                        <div className="row">
                            <img src="img/estracres.png" className="logo" alt=""/>
                        </div>
                        <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                            <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        
                        <div className="row py-4 px-3 mb-4">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="row px-3">
                            <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                            <input className="mb-4" type="text" name="email" value={user.email} placeholder="Enter a valid email address"  onChange={handleChange}/>
                        </div>
                        <div className="row px-3">
                            <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange}/>
                        </div>
                        <div className="row px-3 mb-4">
                        <Link to="/login" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
                        </div>
                        <div className="row mb-3 px-3">
                        <Link to="/login">   <button type="submit" className="btn btn-blue text-center" onClick={login}>Login</button></Link>
                        </div>
                        <div className="row mb-4 px-3">
                        <small className="font-weight-bold">Don't have an account? <Link to="/register" className="text-danger ">Register</Link></small>
                        </div>
                        <div className="row px-3 mb-4">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue py-3">
                <div className="row px-4 ">
                    <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2023. All rights reserved.</small>
                </div>
            </div>
        </div>
    </div>

    </>
    )

}

export default Login