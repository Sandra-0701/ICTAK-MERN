import React from 'react'

const Testimonial = () => {
  return (
    <>
  {/* Spinner Start */}
  <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a
      href="index.html"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        eLEARNING
      </h2>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" className="nav-item nav-link">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="courses.html" className="nav-item nav-link">
          Courses
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu fade-down m-0">
            <a href="team.html" className="dropdown-item">
              Our Team
            </a>
            <a href="testimonial.html" className="dropdown-item active">
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
      <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        Join Now
        <i className="fa fa-arrow-right ms-3" />
      </a>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Header Start */}
  <div className="container-fluid bg-primary py-5 mb-5 page-header">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Testimonial
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
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
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Testimonial
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Testimonial
        </h6>
        <h1 className="mb-5">Our Students Say!</h1>
      </div>
      <div className="owl-carousel testimonial-carousel position-relative">
        <div className="testimonial-item text-center">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src="img/testimonial-1.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src="img/testimonial-2.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src="img/testimonial-3.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
        <div className="testimonial-item text-center">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src="img/testimonial-4.jpg"
            style={{ width: 80, height: 80 }}
          />
          <h5 className="mb-0">Client Name</h5>
          <p>Profession</p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
 
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default Testimonial