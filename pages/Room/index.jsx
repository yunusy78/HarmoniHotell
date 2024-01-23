import React from 'react'
import Booking from '../../components/layout/booking'
import PageHeader from '../../components/room/pageheader'
import Room from '../../components/room/room'
import Testimonial from '../../components/layout/testimonial'
import Newsletter from '../../components/layout/newsletter'
const index = () => {
  return (
    <>
      <PageHeader pageTitle="Rom" />
      <Booking />
      <Room/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default index
