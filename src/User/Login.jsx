import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   
  <>
  {/* Topbar Start */}

  {/* Navbar End */}
  {/* Page Header Start */}
<div className="container-fluid page-header py-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
      Login Here    </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-white" href="#">
              Login
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-white" href="#">
              Register
            </Link>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-fluid bg-light overflow-hidden px-lg-0">
    <div className="container contact px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div
          className="col-lg-6 contact-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 ps-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">Login yourself</h1>
            </div>
            <form>
              <div className="row g-3">
                
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="Password"
                      className="form-control"
                      id="subject"
                      placeholder="password"
                    />
                    <label htmlFor="subject">Password</label>
                  </div>
                </div>
                
                
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3 btnlogreg"  type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <iframe
              className="position-absolute w-100 h-100"
              style={{ objectFit: "cover" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder={0}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a></>
  );
}
export default Login