import React, { useState } from "react";
import Button from "../ui/Button";
import services from "../../data/services";

/**
 * Full Contact page form: name, email, phone, service type (populated
 * from the canonical services list), and message. Shows a confirmation
 * message in place of the form after submission.
 */
const ContactForm = () => {
  const initialState = { name: "", email: "", phone: "", serviceType: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialState);
  };

  const resetForm = () => setSubmitted(false);

  if (submitted) {
    return (
      <div className="bg-light-off rounded-lg p-10 text-center">
        <p className="text-2xl font-bold text-dark">Message Sent!</p>
        <p className="text-gray-500 mt-3">
          Thank you for reaching out. Our team will get back to you within
          one business day.
        </p>
        <Button variant="primary" onClick={resetForm} className="mt-6">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-light-off rounded-lg p-8 space-y-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (optional)"
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-dark"
        />
        <select
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-dark bg-light"
        >
          <option value="" disabled>
            Select a Service
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        required
        rows={5}
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your project..."
        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-dark resize-none"
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;