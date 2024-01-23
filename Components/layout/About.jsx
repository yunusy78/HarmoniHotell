import React, { useState, useEffect } from 'react';
import { getAbout } from '../../pages/api/about';

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAbout();
        setAbouts(data);
      } catch (error) {
        console.error("Error fetching abouts:", error);
      }
    }

    fetchData();
  }, []);

  let delay = 0.1;
  return (
    <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
      {abouts.map((room) => (
        <div key={room.Id} className="col-lg-6">
        <h6 className="section-title text-start text-primary text-uppercase">
    Om Oss
</h6>
<h1 className="mb-4">
    Velkommen til{" "}
    <span className="text-primary">{room.title}</span>
</h1>
<p className="mb-4">
{room.description}
</p>
<div className="row g-3 pb-4">
    <div className="col-sm-4 wow fadeIn" data-wow-delay={`${delay}s`}>
        <div className="border rounded p-1">
            <div className="border rounded text-center p-4">
                <i className="fa fa-hotel fa-2x text-primary mb-2" />
                <h2 className="mb-1" data-toggle="counter-up">
                    50
                </h2>
                <p className="mb-0">Rom</p>
            </div>
        </div>
    </div>
    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
        <div className="border rounded p-1">
            <div className="border rounded text-center p-4">
                <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                <h2 className="mb-1" data-toggle="counter-up">
                    25
                </h2>
                <p className="mb-0">Ansatte</p>
            </div>
        </div>
    </div>
    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
        <div className="border rounded p-1">
            <div className="border rounded text-center p-4">
                <i className="fa fa-users fa-2x text-primary mb-2" />
                <h2 className="mb-1" data-toggle="counter-up">
                    100000
                </h2>
                <p className="mb-0">Kunder</p>
            </div>
        </div>
    </div>
</div>

<a className="btn btn-primary py-3 px-5 mt-2" href="">
    Utforsk Mer
</a>
</div>
))}
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
      </div>
    </div>
  </div>
  )
}

export default About
