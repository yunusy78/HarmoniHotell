import React from 'react'

const Booking = () => {
  return (
    <div
    className="container-fluid booking pb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="bg-white shadow" style={{ padding: 35 }}>
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-3">
                <div className="date" id="date1" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    placeholder="Check in"
                    data-target="#date1"
                    data-toggle="datetimepicker"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="date" id="date2" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control datetimepicker-input"
                    placeholder="Check out"
                    data-target="#date2"
                    data-toggle="datetimepicker"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option value={1}>Adult</option>
                  <option value={1}>Adult 1</option>
                  <option value={2}>Adult 2</option>
                  <option value={3}>Adult 3</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option value={1}>Child</option>
                  <option value={1}>Child 1</option>
                  <option value={2}>Child 2</option>
                  <option value={3}>Child 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Booking
