import React from 'react'

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
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.1s"
              src="img/about-1.jpg"
              style={{ marginTop: "25%" }}
            />
          </div>
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.3s"
              src="img/about-2.jpg"
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-50 wow zoomIn"
              data-wow-delay="0.5s"
              src="img/about-3.jpg"
            />
          </div>
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.7s"
              src="img/about-4.jpg"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ditt navn"
                  />
                  <label htmlFor="name">Ditt navn</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Din e-post"
                  />
                  <label htmlFor="email">Din e-post</label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    id="checkin"
                    placeholder="Innsjekk"
                    data-target="#date3"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="checkin">Innsjekk</label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date4"
                  data-target-input="nearest"
                >
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    id="checkout"
                    placeholder="Utsjekk"
                    data-target="#date4"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="checkout">Utsjekk</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>Voksen 1</option>
                    <option value={2}>Voksen 2</option>
                    <option value={3}>Voksen 3</option>
                  </select>
                  <label htmlFor="select1">Velg voksen</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select2">
                    <option value={1}>Barn 1</option>
                    <option value={2}>Barn 2</option>
                    <option value={3}>Barn 3</option>
                  </select>
                  <label htmlFor="select2">Velg barn</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <select className="form-select" id="select3">
                    <option value={1}>Rom 1</option>
                    <option value={2}>Rom 2</option>
                    <option value={3}>Rom 3</option>
                  </select>
                  <label htmlFor="select3">Velg et rom</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Spesielle ønsker"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Spesielle ønsker</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Bestill nå
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Reservation
