import React, { useState } from "react";
import team from "../data/team";
import { seedTeamMembers } from "../services/teamService";

function SeedTeam() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const teamCount = await seedTeamMembers(team);
      setStatus("success");
      setMessage(`${teamCount} team members were added to Firestore.`);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "The team import failed.");
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1>Import Team Members</h1>
      <p>
        This imports the local team roster into Firestore using each team member&apos;s
        existing id as the document id.
      </p>
      <button type="button" onClick={handleSeed} disabled={status === "loading"}>
        {status === "loading" ? "Importing..." : "Import team"}
      </button>
      {message && <p role="status">{message}</p>}
    </main>
  );
}

export default SeedTeam;
