import React from 'react'
import Booking from '../../components/layout/booking'
import PageHeader from '../../components/room/pageheader'
import Service from '../../components/layout/service'
import Testimonial from '../../components/layout/testimonial'
import Newsletter from '../../components/layout/newsletter'
const index = () => {
  return (
    <>
      <PageHeader pageTitle="Tjenester" />
      <Booking />
      <Service/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default index
