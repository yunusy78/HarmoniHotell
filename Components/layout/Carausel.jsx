import React, { useState, useEffect } from 'react';
import { getBanners } from '../../pages/api/banner';

function Carausel() {
  const [banners, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBanners();
        setBanner(data);
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
        {banners.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img className="w-100" src={item.icon} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                    {item.title}
                  </h6>
                  <h1 className="display-3 text-white mb-4 animated slideInDown">
                    {item.description}
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Våre Rom
                  </a>
                  <a
                    href=""
                    className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Bestill Et Rom
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carausel;
