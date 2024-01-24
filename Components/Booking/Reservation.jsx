import React from 'react'
import AboutImage from '../layout/AboutImage'
import ReservationForm from './ReservationForm'

const Reservation = () => {
  return (
    <>
  <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">
        Rombestilling
      </h6>
      <h1 className="mb-5">
        Bestill et{" "}
        <span className="text-primary text-uppercase">Luksusrom</span>
      </h1>
    </div>
    <div className="row g-5">
      <AboutImage />
      <ReservationForm />
    </div>
  </div>
</div>
    </>
  )
}
export default Reservation
