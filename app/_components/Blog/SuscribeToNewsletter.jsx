"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

const SuscribeToNewsletter = () => {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [showError, setShowError] = useState(false);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email to strapi
      if (email.length) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`,
          {
            data: {
              email: email,
            },
          }
        );
      }
      setHasSignedUp(true);
    } catch (error) {
      console.log(error);
      setShowError(true);
    }
    // Give back feedback to the user that they have siggned up
  };

  return (
    <section className="newsletter">
      {showError ? (
        <h4>Could not sign up for the newsletter</h4>
      ) : hasSignedUp ? (
        <h4 className="newsletter__thanks">Thank you for subscribing!</h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>Subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form action="" className="newsletter__form" onSubmit={onSubmit}>
            <input
              type="text"
              className="newsletter__email input"
              placeholder="Enter you E-mail Address"
              value={email}
              onChange={onChange}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              SUSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default SuscribeToNewsletter;
