import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * Manages state and behavior for the full Contact page form: field values,
 * change handling, and (placeholder) submit behavior showing a success state.
 * Extracted into its own hook to keep the form component focused on rendering.
 */
const useContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is incomplete.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          ...formData,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
        },
        { publicKey }
      );
      setSubmitted(true);
      setFormData(initialState);
    } catch (sendError) {
      setError(
        sendError?.text || sendError?.message ||
          "We could not send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialState);
    setError("");
  };

  return {
    formData,
    submitted,
    sending,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useContactForm;