import { useEffect, useState } from "react";
import { getTestimonials } from "../services/testimonialService";

function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getTestimonials()
      .then((firebaseTestimonials) => {
        if (active) {
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
