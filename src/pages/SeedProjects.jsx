import React, { useState } from "react";
import testimonials from "../data/testimonials";
import team from "../data/team";
import portfolioCategories from "../data/portfolioCategories";
import { seedTestimonials } from "../services/testimonialService";
import { seedTeamMembers } from "../services/teamService";
import { seedPortfolioCategories } from "../services/categoryService";

function SeedProjects() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const testimonialCount = await seedTestimonials(testimonials);
      const teamCount = await seedTeamMembers(team);
      const categoryCount = await seedPortfolioCategories(portfolioCategories);

      setStatus("success");
      setMessage(
        `${testimonialCount} testimonials, ${teamCount} team members, and ${categoryCount} portfolio categories were added to Firestore.`
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
        This imports the local testimonial catalog, team roster, and portfolio filter
        categories into Firestore using their existing ids or values as document ids.
      </p>
      <button type="button" onClick={handleSeed} disabled={status === "loading"}>
        {status === "loading" ? "Importing..." : "Import data"}
      </button>
      {message && <p role="status">{message}</p>}
    </main>
  );
}

export default SeedProjects;