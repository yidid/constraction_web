import React, { useState } from "react";
import projects from "../data/projects";
import { seedProjects } from "../services/projectService";

function SeedProjects() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const count = await seedProjects(projects);
      setStatus("success");
      setMessage(`${count} projects were added to the Firestore projects collection.`);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "The project import failed.");
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1>Import Projects</h1>
      <p>
        This imports the local project catalog into Firestore using each project&apos;s
        existing id as its document id.
      </p>
      <button type="button" onClick={handleSeed} disabled={status === "loading"}>
        {status === "loading" ? "Importing..." : "Import projects"}
      </button>
      {message && <p role="status">{message}</p>}
    </main>
  );
}

export default SeedProjects;