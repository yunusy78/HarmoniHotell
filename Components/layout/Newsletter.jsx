import React from 'react'

const Newsletter = () => {
  return (
    <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="row justify-content-center">
      <div className="col-lg-10 border rounded p-1">
        <div className="border rounded text-center p-1">
          <div className="bg-white rounded text-center p-5">
            <h4 className="mb-4">
              Abonner på vårt{" "}
              <span className="text-primary text-uppercase">Nyhetsbrev</span>
            </h4>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Skriv inn din e-post"
              />
              <button
                type="button"
                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
              >
                Send inn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default Newsletter
