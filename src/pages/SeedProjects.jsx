import React, { useState } from "react";
import socialLinks from "../data/socialLinks";
import { seedSocialLinks } from "../services/socialLinkService";

function SeedProjects() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const socialLinkCount = await seedSocialLinks(socialLinks);

      setStatus("success");
      setMessage(
        `${socialLinkCount} social links were added to Firestore.`
      );
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "The import failed.");
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1>Import site data to Firestore</h1>
      <p>
        This imports the social links into Firestore using stable document ids.
      </p>
      <button type="button" onClick={handleSeed} disabled={status === "loading"}>
        {status === "loading" ? "Importing..." : "Import data"}
      </button>
      {message && <p role="status">{message}</p>}
    </main>
  );
}

export default SeedProjects;