import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder behavior until backend/email integration is connected.
    setSubmitted(true);
    setFormData(initialState);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialState);
  };

  return { formData, submitted, handleChange, handleSubmit, resetForm };
};

export default useContactForm;