import React from 'react';

const Project = () => {
  return (
    <div>
      <>

  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        Projects
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
            Projects
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Projects Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: 60, height: 2 }}
        />
        <h1 className="display-5 mb-5">Our Projects</h1>
      </div>
      <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
        <div className="col-12 text-center">
          <ul className="list-inline mb-5" id="portfolio-flters">
            <li className="mx-2 active" data-filter="*">
              All
            </li>
            <li className="mx-2" data-filter=".first">
              Complete Projects
            </li>
            <li className="mx-2" data-filter=".second">
              Ongoing Projects
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container">
        <div
          className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="portfolio-inner">
            <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Business Security</p>
              <h5 className="lh-base mb-0">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
            </div>
            <div className="portfolio-text text-center bg-white p-4">
              <p className="text-primary mb-2">Business Security</p>
              <h5 className="lh-base mb-3">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href="img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="portfolio-inner">
            <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt="" />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Fire Detection</p>
              <h5 className="lh-base mb-0">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
            </div>
            <div className="portfolio-text text-center bg-white p-4">
              <p className="text-primary mb-2">Fire Detection</p>
              <h5 className="lh-base mb-3">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href="img/portfolio-2.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="portfolio-inner">
            <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt="" />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Access Control</p>
              <h5 className="lh-base mb-0">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
            </div>
            <div className="portfolio-text text-center bg-white p-4">
              <p className="text-primary mb-2">Access Control</p>
              <h5 className="lh-base mb-3">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href="img/portfolio-3.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="portfolio-inner">
            <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt="" />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Alarm Systems</p>
              <h5 className="lh-base mb-0">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
            </div>
            <div className="portfolio-text text-center bg-white p-4">
              <p className="text-primary mb-2">Alarm Systems</p>
              <h5 className="lh-base mb-3">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href="img/portfolio-4.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="portfolio-inner">
            <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt="" />
            <div className="text-center p-4">
              <p className="text-primary mb-2">CCTV &amp; Video</p>
              <h5 className="lh-base mb-0">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
            </div>
            <div className="portfolio-text text-center bg-white p-4">
              <p className="text-primary mb-2">CCTV &amp; Video</p>
              <h5 className="lh-base mb-3">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href="img/portfolio-5.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="portfolio-inner">
            <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt="" />
            <div className="text-center p-4">
              <p className="text-primary mb-2">Smart Home</p>
              <h5 className="lh-base mb-0">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
            </div>
            <div className="portfolio-text text-center bg-white p-4">
              <p className="text-primary mb-2">Smart Home</p>
              <h5 className="lh-base mb-3">
                Smart CCTV Security Systems That Fits Your Business
              </h5>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href="img/portfolio-6.jpg"
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </a>
                <a
                  className="btn btn-square btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Projects End */}
  {/* Footer Start */}

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

export default Project;
