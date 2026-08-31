import { useEffect, useState } from "react";
import testimonialsData from "../data/testimonials";
import { getTestimonials } from "../services/testimonialService";

function useTestimonials() {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getTestimonials()
      .then((firebaseTestimonials) => {
        if (active && firebaseTestimonials.length > 0) {
          setTestimonials(firebaseTestimonials);
        }
      })
      .catch((firebaseError) => {
        if (active) {
          setError(firebaseError.message || "Unable to load testimonials from Firebase.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { testimonials, loading, error };
}

export default useTestimonials;
