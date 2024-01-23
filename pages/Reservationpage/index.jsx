import React from 'react'
import Booking from '../../components/layout/booking'
import PageHeader from '../../components/room/pageheader'
import Reservation from '../../components/booking/reservation'
import Newsletter from '../../components/layout/newsletter'

const index = () => {
  return (
    <>
    <PageHeader pageTitle="Bestilling" />
      <Booking />
        <Reservation/>
        <Newsletter/>
    </>
  )
}

export default index
