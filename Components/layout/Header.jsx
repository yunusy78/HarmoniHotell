import React from 'react'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
const Header = () => {
  return (
    <div>
       <div className="container-fluid bg-dark px-0">
    <div className="row gx-0">
      <div className="col-lg-3 bg-dark d-none d-lg-block">
      <a
  href="index.html"
  className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
>
  <img
    className="img-fluid flex-shrink-0 rounded"
    src="img/harmoni.png"
    style={{ width: 190, height: 125 }}
    alt="Testimonial Image"
  />
</a>
      </div>
      <div className="col-lg-9">
        <div className="row gx-0 bg-white d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
              <i className="fa fa-envelope text-primary me-2" />
              <p className="mb-0">harmonihotelinfo@example.com</p>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-2">
              <i className="fa fa-phone-alt text-primary me-2" />
              <p className="mb-0">+47 012 345 6789</p>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="d-inline-flex align-items-center py-2">
            <SocialMedia />
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 text-primary text-uppercase">Harmoni</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <Link href="/Home" className="nav-item nav-link active">
   Hjem
</Link>
<Link href="/About" className="nav-item nav-link">
   Om Oss
</Link>
<Link href="/Service" className="nav-item nav-link">
    Tjenster
</Link>
<Link href="/RoomDetail" className="nav-item nav-link">
    Rom
</Link>
<Link href="/Booking" className="nav-item nav-link">
    Bestilling
</Link>
<Link href="/Contact" className="nav-item nav-link">
    Kontakt
</Link>

            <Link
              href="/Booking"
              className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block"
            >
              Reservasjon
              <i className="fa fa-arrow-right ms-3" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header
