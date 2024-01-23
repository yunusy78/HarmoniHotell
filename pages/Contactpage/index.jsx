import React from 'react'
import Booking from '../../components/layout/booking'
import PageHeader from '../../components/room/pageheader'
import Contact from '../../components/contact/contact'
import Newsletter from '../../components/layout/newsletter'

const index = () => {
  return (
    <>
      <PageHeader pageTitle="Kontakt" />
      <Booking />
      <Contact/>
      <Newsletter/>
    </>
  )
}

export default index

