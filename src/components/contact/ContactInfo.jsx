import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import socialLinks from "../../data/socialLinks";

/**
 * Company contact details + social links, shown alongside the form
 * on the Contact page. Reuses the shared socialLinks.js data file
 * (also used by the Footer).
 */
const ContactInfo = () => {
  const infoItems = [
    {
      icon: FaMapMarkerAlt,
      label: "Office Address",
      value: "Around CMC michael, Guji Highland building, Addis Ababa",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone Number",
      value: "+251 946 452 222 / +251 92 096 6481",
    },
    {
      icon: FaEnvelope,
      label: "Email Address",
      value: "info@eliteconstruction.com",
    },
    {
      icon: FaClock,
      label: "Working Hours",
      value: "Mon – Sat: 8:00 AM – 6:00 PM",
    },
  ];

  return (
    <div className="space-y-6">
      {infoItems.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark shrink-0">
            <Icon className="text-primary" />
          </div>
          <div>
            <p className="font-semibold text-dark">{label}</p>
            <p className="text-gray-500 text-sm mt-1">{value}</p>
          </div>
        </div>
      ))}

      <div>
        <p className="font-semibold text-dark mb-3">Connect With Us</p>
        <div className="flex gap-3">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              aria-label={name}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark text-light hover:bg-primary hover:text-dark transition-colors duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;