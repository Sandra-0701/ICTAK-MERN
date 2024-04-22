import React from 'react';

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {/* Skilled Instructors */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                <h5 className="mb-3">Skilled Instructors</h5>
                <p>
                 
Expert instructors in martial arts, coding, and culinary arts offer tailored e-learning experiences fostering mastery and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Online Classes */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                <h5 className="mb-3">Online Classes</h5>
                <p>
                Our online classes offer interactive learning experiences tailored to your needs, fostering mastery and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Home Projects */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Home Projects</h5>
                <p>
                Home projects offer hands-on learning, empowering you to explore creativity and master new skills at your own pace.
                </p>
              </div>
            </div>
          </div>

          {/* Book Library */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                <h5 className="mb-3">Book Library</h5>
                <p>
                Our book library offers a diverse collection, fostering knowledge and imagination through immersive reading experiences for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
