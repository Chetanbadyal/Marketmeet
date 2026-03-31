import React from 'react';

const Feature = () => {
  return (
    <div>
      <>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-5">
    <div className="row gx-4 d-none d-lg-flex">
      <div className="col-lg-6 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="fa fa-map-marker-alt text-white" />
          </div>
          <small>123 Street, New York, USA</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="fa fa-envelope-open text-white" />
          </div>
          <small>info@example.com</small>
        </div>
      </div>
      <div className="col-lg-6 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="fa fa-phone-alt text-white" />
          </div>
          <small>+012 345 6789</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <div className="btn-sm-square rounded-circle bg-primary me-2">
            <small className="far fa-clock text-white" />
          </div>
          <small>Mon - Fri : 9AM - 9PM</small>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
    <a href="index.html" className="navbar-brand d-flex align-items-center">
      <h2 className="m-0">
        MARKET<span className="text-primary">MEET</span>
      </h2>
    </a>
    <button
      type="button"
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-4 py-lg-0">
        <a href="index.html" className="nav-item nav-link">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <a href="project.html" className="nav-item nav-link">
          Project
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu rounded-0 rounded-bottom m-0">
            <a href="feature.html" className="dropdown-item active">
              Feature
            </a>
            <a href="quote.html" className="dropdown-item">
              Free Quote
            </a>
            <a href="team.html" className="dropdown-item">
              Our Team
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
            <a href="404.html" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
      <div className="h-100 d-lg-inline-flex align-items-center d-none">
        <a
          className="btn btn-square rounded-circle bg-light text-primary me-2"
          href=""
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          className="btn btn-square rounded-circle bg-light text-primary me-2"
          href=""
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="btn btn-square rounded-circle bg-light text-primary me-2"
          href=""
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          className="btn btn-square rounded-circle bg-light text-primary me-0"
          href=""
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Feature
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            Feature
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Feature Start */}
  <div className="container-fluid bg-light overflow-hidden px-lg-0">
    <div className="container feature px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div
          className="col-lg-6 feature-text py-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="p-lg-5 ps-lg-0">
            <div className="bg-primary mb-3" style={{ width: 60, height: 2 }} />
            <h1 className="display-5 mb-5">Why Choose Us</h1>
            <p className="mb-4 pb-2">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo erat amet
            </p>
            <div className="row g-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-7.png"
                      alt="Icon"
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">Trusted</p>
                    <h5 className="mb-0">Security</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-10.png"
                      alt="Icon"
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">Quality</p>
                    <h5 className="mb-0">Services</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-3.png"
                      alt="Icon"
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">Smart</p>
                    <h5 className="mb-0">Systems</h5>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div
                    className="btn-square bg-white rounded-circle"
                    style={{ width: 64, height: 64 }}
                  >
                    <img
                      className="img-fluid"
                      src="img/icon/icon-2.png"
                      alt="Icon"
                    />
                  </div>
                  <div className="ms-4">
                    <p className="text-primary mb-2">24/7 Hours</p>
                    <h5 className="mb-0">Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="img/feature.jpg"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-secondary footer py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Address</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Services</h5>
          <a className="btn btn-link" href="">
            Business Security
          </a>
          <a className="btn btn-link" href="">
            Fire Detection
          </a>
          <a className="btn btn-link" href="">
            Alarm Systems
          </a>
          <a className="btn btn-link" href="">
            CCTV &amp; Video
          </a>
          <a className="btn btn-link" href="">
            Smart Home
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Quick Links</h5>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid py-4" style={{ background: "#000000" }}>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="#">
            Your Site Name
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
          <br />
          Distributed By{" "}
          <a className="border-bottom" href="https://themewagon.com/">
            Themewagon
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

    </div>
  );
}

export default Feature;
