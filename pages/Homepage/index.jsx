import React from 'react'

import Carausel from '../../components/layout/carausel'
import Room from '../../components/layout/exploreRoom'
import Video from '../../components/layout/video'
import Video2 from '../../components/layout/video2'
import Service from '../../components/layout/service'
import Testimonial from '../../components/layout/testimonial'
import About from '../../components/layout/about'
import Team from '../../components/layout/team'
import Booking from '../../components/layout/booking'
import Newsletter from '../../components/layout/newsletter'

const Index = () => {
  return (
    <div>
  <Carausel/>
  {/* Carousel End */}
  {/* Booking Start */}
  <Booking/>
  {/* Booking End */}
  {/* About Start */}
  <About/>
  {/* About End */}
  {/* Room Start */}
  <Room/>
  {/* Room End */}
  {/* Video Start */}
  <Video/>
  <Video2/>
  {/* Video Start */}
  {/* Service Start */}
  <Service/>
  {/* Service End */}
  {/* Testimonial Start */}
  <Testimonial/>
  {/* Testimonial End */}
  {/* Team Start */}
  <Team/>
  {/* Team End */}
  {/* Newsletter Start */}
  <Newsletter/>
  {/* Newsletter Start */}
  {/* Footer Start */}

    </div>
    
  )
}

export default Index
