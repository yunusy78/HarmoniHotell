import React, { useState, useEffect } from 'react';
import { getSocialMedia } from '../../pages/api/socialmedia';

function SocialMedia() {
  const [socialmedia, setSocialMedia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSocialMedia();
        setSocialMedia(data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    {socialmedia.map((socialmedia) => (
      <a key={socialmedia.Id} className="me-3" href={socialmedia.url}>
            <i className={socialmedia.icon} />
          </a>
    ))}

    </>
  )
}

export default SocialMedia
