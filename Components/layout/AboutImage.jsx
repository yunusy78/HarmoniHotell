import React, { useState, useEffect } from 'react';
import { getAboutImages } from '../../pages/api/aboutimage';

function AboutImage() {
  const [abouts, setAboutImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAboutImages();
        setAboutImages(data);
      } catch (error) {
        console.error("Error fetching abouts:", error);
      }
    }

    fetchData();
  }, []);

  let delay = 0.1;

  return (
    <div className="col-lg-6">
      <div className="row g-3">
        {abouts.map((item, index) => (
          <div
            key={item.Id}
            className={`col-6 ${index % 2 === 0 ? 'text-end' : 'text-start'}`}
          >
            <img
              className={`img-fluid rounded w-${item.imagewidth} wow zoomIn`}
              data-wow-delay={`${delay * index}s`}
              src={item.image}
              style={{ marginTop: index === 0 ? '25%' : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutImage;
