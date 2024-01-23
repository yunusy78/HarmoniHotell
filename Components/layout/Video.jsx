import React from 'react'

const Video = () => {
  return (
    <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
  <div className="row g-0">
    <div className="col-md-6 bg-dark d-flex align-items-center">
      <div className="p-5">
        <h6 className="section-title text-start text-white text-uppercase mb-3">
          Luksusliv
        </h6>
        <h1 className="text-white mb-4">Opplev et Luksuriøst Hotell av Høy Kvalitet</h1>
        <p className="text-white mb-4">
        Harmoni Hotel Arendal tilbyr komfortabel overnatting og gjestfri service i den vakre byen Arendal. 
        Hotellet har en sentral beliggenhet i nærheten av byens sentrum og skiller seg ut med moderne 
        fasiliteter og en avslappende atmosfære. Det er et ideelt overnattingssted for de som ønsker å utforske Arendal.
        </p>
        <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">
          Våre Rom
        </a>
        <a href="" className="btn btn-light py-md-3 px-md-5">
          Bestill Et Rom
        </a>
      </div>
    </div>
    <div className="col-md-6">
      <div className="video">
        <button
          type="button"
          className="btn-play"
          data-bs-toggle="modal"
          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
          data-bs-target="#videoModal"
        >
          <span />
        </button>
      </div>
    </div>
  </div>
</div>
 
  )
}

export default Video
