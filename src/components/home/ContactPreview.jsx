import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../ui/Button";

/**
 * Home page section combining quick company contact info with a minimal
 * inline contact form. Intentionally lighter-weight than the full Contact
 * page (Step 14) — this is a fast, low-friction option for visitors who
 * don't want to navigate away from the Home page for a simple message.
 */
const ContactPreview = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder behavior until backend/email integration is connected.
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-light">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          heading="Let's Discuss Your Project"
          subtext="Reach out directly or send us a quick message — our team typically responds within one business day."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-14">
          {/* Contact info column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark shrink-0">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-dark">Office Address</p>
                <p className="text-gray-500 text-sm mt-1">
                  123 Builder Ave, Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark shrink-0">
                <FaPhoneAlt className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-dark">Phone Number</p>
                <p className="text-gray-500 text-sm mt-1">+251 900 000 000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark shrink-0">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-dark">Email Address</p>
                <p className="text-gray-500 text-sm mt-1">
                  info@eliteconstruction.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark shrink-0">
                <FaClock className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-dark">Working Hours</p>
                <p className="text-gray-500 text-sm mt-1">
                  Mon – Sat: 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Minimal form column */}
          <div className="lg:col-span-3 bg-light-off rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-xl font-bold text-dark">
                  Thank you for reaching out!
                </p>
                <p className="text-gray-500 mt-2">
                  We've received your message and will respond within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-dark"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-dark"
                  />
                </div>

                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your project..."
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-dark resize-none"
                />

                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPreview;