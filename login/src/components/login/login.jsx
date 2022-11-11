import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineGoogle, AiFillApple } from 'react-icons/md';

function NewComponent() {
    return (
        <div id="main-wrapper" className="oxyy-login-register">
            <div className="container-fluid px-0">
                <div className="row g-0 min-vh-100">
                    <div className="col-md-4">
                        <div className="hero-wrap d-flex align-items-center h-100">
                            <div className="hero-mask opacity-5 bg-dark" />
                            <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: 'url("https://harnishdesign.net/demo/html/oxyy/images/login-bg-6.jpg")' }} />
                            <div className="hero-content mx-auto w-100 h-100">
                                <div className="container d-flex flex-column h-100">
                                    <div className="row g-0">
                                        <div className="col-11 col-lg-9 mx-auto">
                                            <div className="logo mt-5 mb-5"> <a className="d-flex" href="index.html" title="Oxyy"><img src="https://harnishdesign.net/demo/html/oxyy/images/logo-2-light.png" alt="Oxyy" /></a> </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 mt-3">
                                        <div className="col-11 col-lg-9 mx-auto">
                                            <h1 className="text-9 text-white fw-300 mb-5"><span className="fw-500">Welcome</span>, We are glad to see you again!</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex flex-column align-items-center bg-dark">
                        <div className="container my-auto py-5">
                            <div className="row g-0">
                                <div className="col-11 col-md-8 col-lg-7 col-xl-6 mx-auto">
                                    <p className="text-2 text-light">Not a member? <a className="fw-500" href="register-17.html">Register</a></p>
                                    <h3 className="text-white mb-4">Log In to Your Account</h3>
                                    <div className="d-flex">
                                        <button type="button" className="btn btn-primary btn-sm fw-400 rounded-3 shadow-none"><span className="me-2"><AiOutlineGoogle/></span><span className="mx-3">Log in with Google</span></button>
                                        <ul className="social-icons d-inline-block social-icons-rounded">
                                            <li className="social-icons-apple mb-0"><a className="bg-dark-4" href="#" data-bs-toggle="tooltip" data-bs-original-title="Sign in with apple"><AiFillApple/></a></li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center my-4">
                                        <hr className="col-1 bg-dark-4" />
                                        <span className="mx-3 text-2 text-muted">OR</span>
                                        <hr className="flex-grow-1 bg-dark-4" />
                                    </div>
                                    <form id="loginForm" className="form-dark" method="post">
                                        <div className="mb-3">
                                            <label className="form-label text-light" htmlFor="emailAddress">Email Address</label>
                                            <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label text-light" htmlFor="loginPassword">Password</label>
                                            <a className="float-end text-2" href="forgot-password-17.html">Forgot Password ?</a>
                                            <input type="password" className="form-control" id="loginPassword" required placeholder="Enter Password" />
                                        </div>
                                        <button className="btn btn-primary my-2" type="submit">Log in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewComponent;