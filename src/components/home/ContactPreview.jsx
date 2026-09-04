import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../ui/Button";
import ContactMap from "../contact/ContactMap";
import useContactForm from "../../hooks/useContactForm";

/**
 * Home page section combining quick company contact info with a minimal
 * inline contact form and map preview.
 */
const ContactPreview = () => {
  const { formData, submitted, sending, error, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section
      id="contact"
      className="py-20 bg-light dark:bg-dark transition-colors duration-200"
    >
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          heading="Let's Discuss Your Project"
          subtext="Reach out directly or send us a quick message — our team typically responds within one business day."
          centered
        />

        {/* Info & Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-14">
          {/* Contact info column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary text-white shrink-0">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <div>
                <p className="font-semibold text-dark dark:text-light">Office Address</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Around CMC michael, Guji Highland building, Addis Ababa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary text-white shrink-0">
                <FaPhoneAlt className="text-lg" />
              </div>
              <div>
                <p className="font-semibold text-dark dark:text-light">Phone Number</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">+251 946 452 222 / +251 92 096 6481</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary text-white shrink-0">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <p className="font-semibold text-dark dark:text-light">Email Address</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  nafcon22@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary text-white shrink-0">
                <FaClock className="text-lg" />
              </div>
              <div>
                <p className="font-semibold text-dark dark:text-light">Working Hours</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Mon – Sat: 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Minimal form column */}
          <div className="lg:col-span-3 bg-light-off dark:bg-dark-light rounded-lg p-8 transition-colors duration-200">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-xl font-bold text-dark dark:text-light">
                  Thank you for reaching out!
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-2">
                  We've received your message and will respond within one business day.
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
                    className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-dark bg-light dark:bg-dark text-dark dark:text-light placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-dark bg-light dark:bg-dark text-dark dark:text-light placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your project..."
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-dark bg-light dark:bg-dark text-dark dark:text-light placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                <Button type="submit" variant="primary" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>
                {error && (
                  <p role="alert" className="text-sm text-red-600">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden border border-gray-200 dark:border-dark-light">
          <ContactMap />
        </div>
      </Container>
    </section>
  );
};

export default ContactPreview;