import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/style.css';

class Userplist extends Component {
  render() {
    const logout = () => {
        window.localStorage.clear();
        window.location.href= "/";
    }
    return (
      <>
      
      <div className="container-xxl bg-white p-0">
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-warning" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}

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
                <Link to="/userhome"  className="nav-item nav-link ">Home</Link>
                    <Link to="/userabout" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                    <Link to="" className="nav-link active" data-bs-toggle="dropdown">Property</Link>
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

            </div>
        </nav>
    </div>

    <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Property Listing</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="# ">Home</a></li>
                            <li class="breadcrumb-item"><a href="# ">Pages</a></li>
                            <li class="breadcrumb-item text-body active" aria-current="page">Property Listing</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/re2.jpg" alt=""/>
                </div>
            </div>
        </div>
    



    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    {/* <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 className="mb-3">Property Listing</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                    </div> */}
                </div>
                <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-warning active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="btn btn-outline-warning" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                        </li>
                        <li className="nav-item me-0">
                            <a className="btn btn-outline-warning" data-bs-toggle="pill" href="#tab-3">For Rent</a>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
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
                                    <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
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
}

export default Userplist