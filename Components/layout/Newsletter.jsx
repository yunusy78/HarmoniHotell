import React, { useState } from 'react';
import Swal from 'sweetalert2';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscriptionResult, setSubscriptionResult] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
  
    try {
      // Validate email (you can add more validation)
      if (!email || !email.trim()) {
        setSubscriptionResult("Please enter a valid email");
        return;
      }
  
      // Send POST request to your API endpoint
      const response = await fetch(`${apiUrl}/newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      // Check if the response is in JSON format
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        // Handle the response as JSON
        const data = await response.json();
  
        if (response.ok) {
          // Başarılı abonelik
          Swal.fire({
            icon: 'success',
            title: 'Abonnement vellykket!',
            showConfirmButton: false,
            timer: 3000,
          });
          setSubscriptionResult('Abonnement vellykket!');
        } else {
          // JSON yanıtlı başarısız abonelik
          Swal.fire({
            icon: 'error',
            title: 'Abonnement mislyktes',
            text: `Abonnement mislyktes: ${data.message}`,
          });
          setSubscriptionResult(`Abonnement mislyktes: ${data.message}`);
        }
      } else {
        // JSON olmayan yanıt
        if (response.ok) {
          // JSON olmayan yanıtlı başarılı abonelik
          Swal.fire({
            icon: 'success',
            title: 'Abonnement vellykket!',
            showConfirmButton: false,
            timer: 3000,
          });
          setSubscriptionResult('Abonnement vellykket!');
        } else {
          // JSON olmayan yanıtlı başarısız abonelik
          const text = await response.text();
          Swal.fire({
            icon: 'error',
            title: 'Abonnement mislyktes',
            text: `Abonnement mislyktes: ${text}`,
          });
          setSubscriptionResult(`Abonnement mislyktes: ${text}`);
        }
      }
    } catch (error) {
      console.error('Feil ved påmelding til nyhetsbrev:', error);
      Swal.fire({
        icon: 'error',
        title: 'Feil ved påmelding',
        text: 'Intern serverfeil',
      });
      setSubscriptionResult('Intern serverfeil');
    }
  };
  

  return (
    <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">

      <div className="row justify-content-center">
        <div className="col-lg-10 border rounded p-1">
          <div className="border rounded text-center p-1">
            <div className="bg-white rounded text-center p-5">
              <h4 className="mb-4">
                Subscribe to our{" "}
                <span className="text-primary text-uppercase">Newsletter</span>
              </h4>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              {subscriptionResult && (
                <div className="mt-3 text-success">{subscriptionResult}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
