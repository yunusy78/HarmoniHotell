import React, { useState, useEffect } from 'react';
import { getFooters } from '../../pages/api/footer';
import SocialMedia from './SocialMedia';


function Footer() {
  const [footers, setFooters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFooters();
        setFooters(data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    }

    fetchData();
  }, []);

  let delay = 0.1;

  return (
    <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
  <div className="container pb-5">
  {footers.map((footer) => (
    <div key={footer.Id} className="row g-5">
      <div className="col-md-6 col-lg-4">
        <div className="bg-primary rounded p-4">
          <a href="index.html">
            <h1 className="text-white text-uppercase mb-3">Harmoni Hotell</h1>
          </a>
          <p className="text-white mb-0">
            <a className="text-dark fw-medium">
            {footer.description}
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <h6 className="section-title text-start text-primary text-uppercase mb-4">
          Kontakt
        </h6>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt me-3" />
          {footer.location}
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt me-3" />
          {footer.phone}
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope me-3" />
          {footer.email}
        </p>
        <div className="d-flex pt-2">
          <SocialMedia />
        </div>
      </div>
      <div className="col-lg-5 col-md-12">
        <div className="row gy-5 g-4">
          <div className="col-md-6">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">
              Selskap
            </h6>
            <a className="btn btn-link" href="">
              Om Oss
            </a>
            <a className="btn btn-link" href="">
              Kontakt Oss
            </a>
            <a className="btn btn-link" href="">
              Personvernspolicy
            </a>
            <a className="btn btn-link" href="">
              Vilkår og Betingelser
            </a>
            <a className="btn btn-link" href="">
              Støtte
            </a>
          </div>
          <div className="col-md-6">
            <h6 className="section-title text-start text-primary text-uppercase mb-4">
              Tjenester
            </h6>
            <a className="btn btn-link" href="">
              Mat &amp; Restaurant
            </a>
            <a className="btn btn-link" href="">
              Spa &amp; Trening
            </a>
            <a className="btn btn-link" href="">
              Sport &amp; Spill
            </a>
            <a className="btn btn-link" href="">
              Arrangement &amp; Fest
            </a>
            <a className="btn btn-link" href="">
              GYM &amp; Yoga
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="border-bottom" href="#">
          https://www.harmonihotell.no/
          </a>
          , Alle Rettigheter Reservert.
          {/*/*** Denne malen er gratis så lenge du beholder lenken/attribusjonslenken/tilbakekoblingen til fotforfatteren. Hvis du vil bruke malen uten lenken/attribusjonslenken/tilbakekoblingen til fotforfatteren, kan du kjøpe Credit Removal License fra "https://htmlcodex.com/credit-removal". Takk for støtten. *** /*/}
          Designet av{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <a href="">Hjem</a>
            <a href="">Informasjonskapsler</a>
            <a href="">Hjelp</a>
            <a href="">Ofte Stilte Spørsmål</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
