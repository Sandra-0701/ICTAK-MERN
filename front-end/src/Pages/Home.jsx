import React from 'react'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Course from '../components/Course'
import Carousel from '../components/Carousel'
const Home = () => {
  return (
    <>
  <Spinner/>
  <Navbar/>
  <Carousel/>
<Service/>
 <AboutUs/>
  {/* Categories Start */}
  <div className="container-xxl py-5 category">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 className="mb-5">Courses Categories</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/cat-1.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Web Design</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Graphic Design</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Video Editing</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <a
            className="position-relative d-block h-100 overflow-hidden"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/cat-4.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div
              className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style={{ margin: 1 }}
            >
              <h5 className="m-0">Online Marketing</h5>
              <small className="text-primary">49 Courses</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Categories Start */}
 <Course/>
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Instructors
        </h6>
        <h1 className="mb-5">Expert Instructors</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-1.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-2.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-3.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-4.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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
 <Footer/>
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default Home