/* eslint-disable react-hooks/rules-of-hooks */
// import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './css/style.css';
import axios from 'axios'
// import { tokenContext } from '../login';

function Userhome(){
    // const loginTokenContext = useContext(tokenContext)
    // const{token} = LoginTokenContext;

    const logout = () => {
        window.localStorage.clear();
        window.location.href= "/";
        window.localStorage.removeItem('token')
    }
    const profileIn=async()=>{
        // console.log(loginTokenContext);
        let result = await axios.get('http://localhost:8000/profile',{
            headers:{
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODMzNTU0NDJ9.H8i9E48fpQqaPgTi6VFxQfS6EM_Qj1IeQimq_bujPsc`
            }
        });
        console.log(result);
    }
    return (
      
    <>
        
<div className="container-xxl bg-white p-0">

    <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link to="/userhome" className="navbar-brand d-flex align-items-center text-center">
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
                    <Link to="/userhome"  className="nav-item nav-link active">Home</Link>
                    <Link to="/userabout" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                    <Link to="" className="nav-link" data-bs-toggle="dropdown">Property</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/userp_list" className="dropdown-item">Property List</Link>
                            <Link to="/userp_agent" className="dropdown-item">Property Agent</Link>
                        </div>
                    </div>
                    <Link to="/usercontact" className="nav-item nav-link">Contact</Link>
                </div>
                <Link to="/getAppointment" className="btn btn-warning px-3 d-none d-lg-flex">Get Appointment</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="" onClick={logout} className="btn btn-warning px-3 d-none d-lg-flex">Logout</Link>
                <Link to="" onClick={profileIn} className="btn btn-warning px-3 d-none d-lg-flex">Profile</Link>

            </div>
        </nav>
    </div>

    <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
                <br/><br/>
                <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-warning">Perfect Home</span> To Live With Your Family</h1>
                <p className="animated fadeIn mb-4 pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                <a href=" " className="btn btn-warning py-3 px-5 me-3 animated fadeIn">Get Started</a>
            </div>
            
            <div className="col-md-6 animated fadeIn">
                
                    <div className="owl-carousel-item">
                        <img className="img-fluid" src="img/re2.jpg" alt="" />
                    </div>
            
            
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
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="mb-3">Property Types</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-apartment.png" alt="Icon"/>
                            </div>
                            <h6>Apartment</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-villa.png" alt="Icon"/>
                            </div>
                            <h6>Villa</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-house.png" alt="Icon"/>
                            </div>
                            <h6>Home</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-housing.png" alt="Icon"/>
                            </div>
                            <h6>Office</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-building.png" alt="Icon"/>
                            </div>
                            <h6>Building</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon"/>
                            </div>
                            <h6>Townhouse</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-condominium.png" alt="Icon"/>
                            </div>
                            <h6>Shop</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                        <div className="rounded p-4">
                            <div className="icon mb-3">
                                <img className="img-fluid" src="img/icon-luxury.png" alt="Icon"/>
                            </div>
                            <h6>Garage</h6>
                            <span>Exicting Properties</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src="img/re8.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!Hic dignissimos harum suscipit!Hic dignissimos harum suscipit!</p>
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
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 className="mb-3">Property Listing</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                    </div>
                </div>
                <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-warning active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-warning" data-bs-toggle="pill" href="#sell">For Sell</a>
                        </li>
                        <li className="nav-item me-0">
                            <a className="btn btn-outline-warning" data-bs-toggle="pill" href="#rent">For Rent</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id="sell">For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,000,00</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>15000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-2.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id="rent">For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹100,000</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>20000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-3.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹25,000,00</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>6000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-4.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,000,000,0</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>100000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-5.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹5,45,000,00</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>7000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-6.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹30,000,00</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                        <Link to="/userp_list" className="btn btn-warning py-3 px-5">Browse More Property</Link>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id="sell">For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-2.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-3.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-4.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-5.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-6.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                        <Link to="/userp_list" className="btn btn-warning py-3 px-5">Browse More Property</Link>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-1.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-2.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-3.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-4.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-5.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='sell'>For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="img-fluid" src="img/property-6.jpg" alt=""/></a>
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" id='rent'>For Rent</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹12,345</h5>
                                    <a className="d-block h5 mb-2" href=" ">Golden Urban House For Sell</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>Mohali , Chandigarh, Kharar, Landran</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>1000 Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>3 Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>2 Bath</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                        <Link to="/userp_list" className="btn btn-warning py-3 px-5" >Browse More Property</Link>
                        </div>
                    </div>
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
                            <Link to="/usercontact" className="btn btn-warning py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</Link>
                            <Link to="/getAppointment" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appoinment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
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





        <div className="container-xxl py-5" >
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
              <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">   {/* owl-carousel */}
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" alt="" style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Anuradha</h6>
                                    <small>Doctor</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" alt="" style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">John</h6>
                                    <small>Businessman</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" alt="" style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Kumar</h6>
                                    <small>Engineer</small>
                                </div>
                            </div>
                        </div>
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
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>dev@gmail.com</p>
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
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

export default Userhome;