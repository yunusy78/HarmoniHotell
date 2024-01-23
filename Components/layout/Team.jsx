import React, { useState, useEffect } from 'react';
import { getEmployees } from '../../pages/api/team';

function Team() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
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
        Vårt Team
      </h6>
      <h1 className="mb-5">
        Utforsk våre{" "}
        <span className="text-primary text-uppercase">Ansatte</span>
      </h1>
    </div>
    <div className="row g-4">
    {employees.map((team) => (
            <div key={team.Id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${delay}s`}>
        <div className="rounded shadow overflow-hidden">
          <div className="position-relative">
            <img className="img-fluid" src={team.image} alt="" />
            <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
              <a className="btn btn-square btn-primary mx-1" href={team.facebookUrl}>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-primary mx-1" href={team.twitterUrl}>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-primary mx-1" href={team.instagramUrl}>
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="text-center p-4 mt-3">
            <h5 className="fw-bold mb-0">{team.firstName} {team.surname}</h5>
            <small>{team.title}</small>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>

  )
}

export default Team
