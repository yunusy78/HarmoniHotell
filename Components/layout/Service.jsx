import React, { useState, useEffect } from 'react';
import { getServices } from '../../pages/api/service';

function Service() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchData();
  }, []);

  let delay = 0.1;

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">
            Våre Tjenester
          </h6>
          <h1 className="mb-5">
            Utforsk våre{" "}
            <span className="text-primary text-uppercase">Tjenester</span>
          </h1>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div
              key={service.Id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${delay}s`}
            >
              <a className="service-item rounded" href="">
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className={service.icon} />
                  </div>
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="text-body mb-0">{service.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
