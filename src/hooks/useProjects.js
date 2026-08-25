import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getProjects()
      .then((firebaseProjects) => {
        if (active) setProjects(firebaseProjects);
      })
      .catch((firebaseError) => {
        if (active) {
          setError(firebaseError.message || "Unable to load projects from Firebase.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { projects, loading, error };
}

export default useProjects;