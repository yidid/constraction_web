import React, { useState } from "react";
import stats from "../data/stats";
import { seedCompanyStats } from "../services/statsService";

function SeedStats() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const companyStats = await seedCompanyStats({
        foundedYear: 2005,
        projects: stats[1]?.value ?? 250,
        clients: stats[2]?.value ?? 180,
        team: stats[3]?.value ?? 45,
      });

      setStatus("success");
      setMessage(
        `Company stats saved to Firestore: founded ${companyStats.foundedYear}, ${companyStats.projects}+ projects, ${companyStats.clients}+ clients, ${companyStats.team}+ team members.`
      );
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "The stats import failed.");
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1>Import Company Stats</h1>
      <p>
        This stores the company profile in Firestore. The years of experience will be
        calculated automatically from the founded year.
      </p>
      <button type="button" onClick={handleSeed} disabled={status === "loading"}>
        {status === "loading" ? "Importing..." : "Import stats"}
      </button>
      {message && <p role="status">{message}</p>}
    </main>
  );
}

export default SeedStats;
