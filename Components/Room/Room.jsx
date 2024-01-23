import React, { useState, useEffect } from 'react';
import { getRooms } from '../../pages/api/room';

function Room() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }

    fetchData();
  }, []);

  let delay = 0.1;

  return (
    <>
      {/* Room Start */}
      <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title text-center text-primary text-uppercase">
  Våre Rom
</h6>
<h1 className="mb-5">
  Utforsk våre <span className="text-primary text-uppercase">Rom</span>
</h1>
</div>
<div className="row g-4">
{rooms.map((room) => (
            <div key={room.Id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${delay}s`}>
  <div className="room-item shadow rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" src={room.image} alt="" />
      <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
        NOK {room.price} per natt
      </small>
    </div>
    <div className="p-4 mt-2">
      <div className="d-flex justify-content-between mb-3">
        <h5 className="mb-0">{room.title}</h5>
        <div className="ps-2">
          <small className="fa fa-star text-primary" />
          <small className="fa fa-star text-primary" />
          <small className="fa fa-star text-primary" />
          <small className="fa fa-star text-primary" />
          <small className="fa fa-star text-primary" />
        </div>
      </div>
      <div className="d-flex mb-3">
        <small className="border-end me-3 pe-3">
          <i className="fa fa-bed text-primary me-2" />{room.capacity} Senger
        </small>
        <small className="border-end me-3 pe-3">
          <i className="fa fa-bath text-primary me-2" />{room.size} Bad
        </small>
        <small>
          <i className="fa fa-wifi text-primary me-2" />
          Trådløst nettverk
        </small>
      </div>
      <p className="text-body mb-3">
      {room.description}
      </p>
      <div className="d-flex justify-content-between">
        <a className="btn btn-sm btn-primary rounded py-2 px-4" href="">
          Se Detaljer
        </a>
        <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
          Bestill Nå
        </a>
      </div>
    </div>
  </div>
</div>
  ))}
      </div>
    </div>
  </div>
  
  {/* Room End */}
    </>
  )
}

export default Room
