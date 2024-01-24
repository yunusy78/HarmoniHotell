import React, { useState } from 'react';
import Swal from 'sweetalert2';
import RoomSelect from './RoomSelect';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ReservationForm = () => {
  const [] = useState('');

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${apiUrl}/Reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          firstName: document.getElementById('firstName1').value,
          lastName: document.getElementById('lastName1').value,
          description: document.getElementById('description1').value,
          checkIn: document.getElementById('checkin1').value,
          checkOut: document.getElementById('checkout1').value,
          adult: document.getElementById('adults1').value,
          child: document.getElementById('child1').value,
          infant: document.getElementById('infant1').value,
          roomId: document.getElementById('roomId1').value,

        }),
      });

      if (response.ok) {
        // Successful submission, show SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'Reservasjon sendt inn!',
          showConfirmButton: false,
          timer: 3000,
        });
        document.getElementById('reservationForm').reset();
      } else {
        // Handle failed submission, show SweetAlert error message
        const data = await response.json();
        console.log(data);
        Swal.fire({
          icon: 'error',
          title: 'Feilet å sende inn reservasjon',
          text: data.message || response.statusText,
        });
      }
     
    } catch (error) {
      console.error('Feil ved innsending av reservasjonsskjema:', error);
      // Handle error, show SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Feil ved innsending av reservasjon',
        text: error.message,
      });
    }
  };

  return (
    <div className="col-lg-6">
      <div className="wow fadeInUp" data-wow-delay="0.2s">
        <form id="reservationForm" onSubmit={handleReservationSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="firstName1"
                  placeholder="First Name"
                />
                <label htmlFor="firstName">Fornavn</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="lastName1"
                  placeholder="Last Name"
                />
                <label htmlFor="lastName">Etternavn</label>
              </div>
            </div>
            <div className="col-md-6">
                <div className="form-floating">
                    <input
                    type="date"
                    className="form-control"
                    id="checkin1"
                    placeholder="InnSjekk"
                    />
                    <label htmlFor="checkin">Insjekk</label>
                </div>
            </div>

            <div className="col-md-6">
                <div className="form-floating">
                    <input
                    type="date"
                    className="form-control"
                    id="checkout1"
                    placeholder="UtSjekk"
                    />
                    <label htmlFor="checkin">Utsjekk</label>
                </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="adults1"
                  placeholder="Voksen"
                />
                <label htmlFor="adults">Velg Voksen</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="child1"
                  placeholder="Antall Barn"
                />
                <label htmlFor="child">Velg Barn</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="infant1"
                  placeholder="Antall Baby"
                />
                <label htmlFor="infant">Velg Baby</label>
              </div>
            </div>
           <RoomSelect />
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Special Requests"
                  id="description1"
                  style={{ height: 100 }}
                />
                <label htmlFor="description">Spesielle ønsker</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
              Reserver nå
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
