import React from 'react'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Login</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Login Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-md-8">
              <form>
                <div className="form-floating mb-4">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}

      <Footer/>
    </>
  )
}

export default Login;
