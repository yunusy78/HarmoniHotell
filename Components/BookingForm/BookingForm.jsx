import React, { useState } from 'react';
import Swal from 'sweetalert2';
import BookingRoomSelect from './BookingRoomSelect';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const BookingForm = () => {
  const [] = useState('');

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/Reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: document.getElementById('firstName').value,
          lastName: document.getElementById('lastName').value,
          description: document.getElementById('description').value,
          checkIn: document.getElementById('checkin').value,
          checkOut: document.getElementById('checkout').value,
          adult: document.getElementById('adults').value,
          child: document.getElementById('child').value,
          infant: document.getElementById('infant').value,
          roomId: document.getElementById('roomId').value,
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
        document.getElementById('bookingForm').reset();
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
    <form id='bokingForm' onSubmit={handleBookingSubmit} >
      <div className="col-md-12">
        <div className="row g-2">
          <div className="col-md-3">
            <div className="date" id="date1" data-target-input="nearest">
              <input
                type="date"
                className="form-control"
                id="checkin"
                placeholder="Innsjekk"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="date" id="date2" data-target-input="nearest">
              <input
                type="date"
                className="form-control"
                id="checkout"
                placeholder="Utjekk"
              />
            </div>
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Fornavn"
            />
          </div>
          <div className="col-md-3">
           
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Etternavn"
            />
          </div>
          <div className="col-md-3">
           
            <input
              type="number"
              className="form-control"
              id="adults"
              placeholder="Antall Voksen"
            />
          </div>
          <div className="col-md-3">
           
            <input
              type="number"
              className="form-control"
              id="child"
              placeholder="Antall Barn"
            />
          </div>
          <div className="col-md-3">
            
            <input
              type="number"
              className="form-control"
              id="infant"
              placeholder="Antall Baby"
            />
          </div>
          <BookingRoomSelect />
        </div>
      </div>
      <br />
      <div className="col-md-10 offset-md-4">
        <div className="row g-2">
          {/* Diğer giriş alanları */}
          <div className="col-md-3">
            <button className="btn btn-primary w-100">Bestill et rom nå</button>
          </div>
        </div>
      </div>
      
    </form>
  );
};

export default BookingForm;
