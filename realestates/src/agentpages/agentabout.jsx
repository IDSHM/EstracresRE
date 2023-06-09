import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/style.css';

class Agentabout extends Component {
  render() {

    const logout = () => {
        window.localStorage.clear();
        window.location.href= "/";
    }

    return (
    
        <>

<div className="container-xxl bg-white p-0">


        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <Link to="/agenthome" className="navbar-brand d-flex align-items-center text-center">
                <div className="icon p-2 me-2">
                    <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}}/>
                </div>
                <h1 className="m-0 text-warning">Estracres</h1>
            </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                    <Link to="/agenthome"  className="nav-item nav-link ">Home</Link>
                    <Link to="/agentabout" className="nav-item nav-link active">About</Link>
                        <div className="nav-item dropdown">
                        <Link to="" className="nav-link" data-bs-toggle="dropdown">Property</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/agentp_list" className="dropdown-item">Property List</Link>
                            <Link to="/agentp_agent" className="dropdown-item">Property Agent</Link>
                            </div>
                        </div>
                        <Link to="/agentcontact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="/check" className="btn btn-warning px-3 d-none d-lg-flex">Check Appointment</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="" onClick={logout} className="btn btn-warning px-3 d-none d-lg-flex">Logout</Link>
                </div>
            </nav>
        </div>


        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">About Us</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="# ">Home</a></li>
                            <li className="breadcrumb-item"><a href="# ">Pages</a></li>
                            <li className="breadcrumb-item text-body active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src="img/re2.jpg" alt=""/>
                </div>
            </div>
        </div>


        <div className="container-fluid bg-warning mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword"/>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Property Type</option>
                                    <option value="1">Property Type 1</option>
                                    <option value="2">Property Type 2</option>
                                    <option value="3">Property Type 3</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="img/about.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                        <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                        <p><i className="fa fa-check text-warning me-3"></i>ABCD</p>
                        <p><i className="fa fa-check text-warning me-3"></i>WXYZ</p>
                        <p><i className="fa fa-check text-warning me-3"></i>MNOP</p>
                        <a className="btn btn-warning py-3 px-5 mt-3" href=" ">Read More</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                                </div>
                                <a href="/usercontact" className="btn btn-warning py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</a>
                                <a href="/getAppointment" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "400px"}}>
                    <h1 className="mb-3">Property Agents</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Shivam</h5>
                                <small>Agent</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Gaurav</h5>
                                <small>Agent</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Manu</h5>
                                <small>Agent</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=" "><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Rahul</h5>
                                <small>Agent</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                            <Link to="/userp_agent" className="btn btn-warning py-3 px-5" >Browse More Agents</Link>
                        </div>
                </div>
            </div>
        </div>
        

    
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Sector 75, Mohali, Punjab, India</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 7973108409</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>dev@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href=" ">About Us</a>
                        <a className="btn btn-link text-white-50" href=" ">Contact Us</a>
                        <a className="btn btn-link text-white-50" href=" ">Our Services</a>
                        <a className="btn btn-link text-white-50" href=" ">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href=" ">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control bg-transparent text-white w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="# ">Estracres</a>, All Right Reserved. 
							
							Designed By <a className="border-bottom" href=" ">Ishaan</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href=" ">Home</a>
                                <a href=" ">Cookies</a>
                                <a href=" ">Help</a>
                                <a href=" ">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


        <a href="# " className="btn btn-lg btn-warning btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>

        </>


    )
  }
}

export default Agentabout;