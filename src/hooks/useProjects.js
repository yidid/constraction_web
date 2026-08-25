import { useEffect, useState } from "react";
import localProjects from "../data/projects";
import { getProjects } from "../services/projectService";

function useProjects() {
  const [projects, setProjects] = useState(localProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getProjects()
      .then((firebaseProjects) => {
        if (active && firebaseProjects.length > 0) {
          setProjects(firebaseProjects);
        }
      })
      .catch(() => {
        // Keep the local catalog available when Firebase is unavailable.
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { projects, loading };
}

export default useProjects;