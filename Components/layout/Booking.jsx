import React from 'react'
import BookingForm from '../BookingForm/BookingForm'

const Booking = () => {
  return (
    <div
    className="container-fluid booking pb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="bg-white shadow" style={{ padding: 35 }}>
        <div className="row g-2">
          <BookingForm />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Booking
