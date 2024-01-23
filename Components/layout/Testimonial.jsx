import React, { useState, useEffect } from 'react';
import { getTestimonials } from '../../pages/api/testimoniallist';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.testimonialId} className="col-lg-4 mb-4">
              <div className="card h-100 bg-white rounded">
                <div className="card-body">
                  <p className="card-text">{testimonial.comment}</p>
                </div>
                <div className="card-footer">
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded"
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: 45, height: 45 }}
                    />
                    <div className="ps-3">
                      <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                      <small>{testimonial.job}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
