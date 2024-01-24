import React, { useState } from 'react';
import Swal from 'sweetalert2';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const ContactForm = () => {
  const [contactResult, setContactResult] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Implement your actual contact form submission logic here
      // For example, you might make an API call to your server
      // or use a service like SendGrid, Nodemailer, etc.
  
      // Simulating a successful submission for this example
      // Replace this with your actual logic
      const response = await fetch(`${apiUrl}/Contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value,
        }),
      });

      if (response.ok) {
        // Successful submission, show SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'Melding sendt!',
          showConfirmButton: false,
          timer: 3000,
        });
        document.getElementById('ContactForm').reset();
      } else {
        // Handle failed submission, show SweetAlert error message
        const data = await response.json();
        console.log(data);
        Swal.fire({
          icon: 'error',
          title: 'Feilet å sende melding:',
          text: data.message || response.statusText,
        });
      }
     
    } catch (error) {
      console.error('Feil ved innsending av reservasjonsskjema:', error);
      // Handle error, show SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Feilet å sende melding',
        text: error.message,
      });
    }

    };
  
  return (
    <div className="col-md-6">
      <div className="wow fadeInUp" data-wow-delay="0.2s">
        <form id='ContactForm' onSubmit={handleContactSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Write your message here"
                  id="message"
                  style={{ height: 150 }}
                  defaultValue={''}
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Send Message
              </button>
            </div>
            {contactResult && (
              <div className="col-12 mt-3 text-success">{contactResult}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
