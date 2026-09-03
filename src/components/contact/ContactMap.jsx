import React from "react";

/**
 * Google Maps embed (no API key required) showing the company's office
 * location. The Google Maps link below opens the verified business listing.
 */
const ContactMap = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md w-full">
      <iframe
        title="NAF Construction Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4581743294334!2d38.8382873!3d9.0219008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b004125d86d%3A0xa18a0d5f19998163!2sNAF%20Construction%20%26%20Trading!5e0!3m2!1sen!2set!4v1788464916058!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
     
    </div>
  );
};

export default ContactMap;