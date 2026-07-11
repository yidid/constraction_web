import React from "react";

/**
 * Google Maps embed (no API key required) showing the company's office
 * location. Uses the free "embed" endpoint intended for exactly this
 * placeholder use case — swap the query in the src URL once the final
 * address is confirmed.
 */
const ContactMap = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-96 w-full">
      <iframe
        title="Elite Construction Office Location"
        src="https://www.google.com/maps?q=Addis+Ababa,+Ethiopia&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;