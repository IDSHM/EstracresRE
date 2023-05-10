
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './regis_style.css';


const Register = () => {
    
        const [ user, setUser] = useState({
            fname: "",
            lname: "",
            email: "",
            password: "",
            cpassword: "",
            phone: "",
            role: ""

        })

        const handleChange = e => {
            const { name, value } = e.target
            // console.log(name, value);
            setUser(user=>({
                ...user,
                [name]:value
            }))
            
        }

        const navigate = useNavigate();
        const register = async() =>{
            console.log(user);
            const { fname, lname, email, password, cpassword, phone, role } = user;

            if( fname && lname && email && (password===cpassword) && phone && role ){
                await axios.post('http://localhost:8000/register', user)
                .then(res => {
                    if(res.data ==="Already registered"){
                        alert("Already Registered");
                        navigate('/login');
                    }
                    else{
                        alert("Register Success");
                        navigate('/login');
                    }
                
                })
            }
            else{
                alert("Please fill all fields")
            }
        }
    
        return (
            <>

    <div className="container register">
        {console.log("User", user)};
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from buying or selling your property!</p>
                        <Link to="/login"><input type="submit" name="" value="Login"/></Link><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Registeration</h3>
                            <form>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="fname" value={user.fname}  className="form-control" placeholder="First Name *" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="lname" value={user.lname} className="form-control" placeholder="Last Name *" onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" value={user.password} className="form-control" placeholder="Password *" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" value={user.email} className="form-control" placeholder="Your Email *" onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phone" value={user.phone} minlength="10" maxlength="10"  className="form-control" placeholder="Your Phone *" onChange={handleChange}/>
                                        </div>
                                        <div className="form-group">
                                    
                                            <div className="form-group">
                                            <input type="password" name="cpassword" value={user.cpassword} className="form-control" placeholder="Confirm Password *" onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-9"></div>
                                        <div className="form-group">
                                        <select className="form-control" name="role" value={user.role} onChange={handleChange}>
                                                <option className="hidden"  selected >Role</option>
                                                <option>Agent</option>
                                                <option>User</option>
                                                
                                            </select>
                                            </div>
                                        </div>
                                        <Link to="/register"><input type="submit" className="btnRegister" value="Register" onClick={register}/></Link>
                        
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    </div>









            </>
        )
    }


export default Register;