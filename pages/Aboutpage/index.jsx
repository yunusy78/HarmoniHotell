import React from 'react'
import About from '../../components/layout/about'
import Team from '../../components/layout/team'
import Booking from '../../components/layout/booking'
import PageHeader from '../../components/room/pageheader'
import Newsletter from '../../components/layout/newsletter'

const index = () => {
  return (
    <>
      <PageHeader pageTitle="Om Oss" />
      <Booking />
      <About/>
      <Team/>
      <Newsletter/>
    </>
  )
}

export default index

