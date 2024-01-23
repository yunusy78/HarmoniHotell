import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">
        Kontakt Oss
      </h6>
      <h1 className="mb-5">
        <span className="text-primary text-uppercase">Kontakt</span> oss for
        eventuelle spørsmål
      </h1>
    </div>
    <div className="row g-4">
      <div className="col-12">
        <div className="row gy-4">
          <div className="col-md-4">
            <h6 className="section-title text-start text-primary text-uppercase">
              Booking
            </h6>
            <p>
              <i className="fa fa-envelope-open text-primary me-2" />
              harmonihotellbook@example.com
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="section-title text-start text-primary text-uppercase">
              Generelt
            </h6>
            <p>
              <i className="fa fa-envelope-open text-primary me-2" />
              harmonihotellinfo@example.com
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="section-title text-start text-primary text-uppercase">
              Teknisk
            </h6>
            <p>
              <i className="fa fa-envelope-open text-primary me-2" />
              harmonihotelltech@example.com
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <iframe
          className="position-relative rounded w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32069.884163608635!2d8.772242264662576!3d58.45837286104283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463dbce36c2d3a01%3A0x9519dd6b7c5b9606!2sArendal%2C%20Norway!5e0!3m2!1sen!2sno!4v1629411208493!5m2!1sen!2sno"
          frameBorder={0}
          style={{ minHeight: 350, border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
      <div className="col-md-6">
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ditt Navn"
                  />
                  <label htmlFor="name">Ditt Navn</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Din E-post"
                  />
                  <label htmlFor="email">Din E-post</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Emne"
                  />
                  <label htmlFor="subject">Emne</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Skriv en melding her"
                    id="message"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Melding</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Melding
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

export default Contact
