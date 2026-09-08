import React, { useEffect, useMemo, useState } from "react";
import Container from "../ui/Container";
import TeamMemberCard from "./TeamMemberCard";
import { getTeamMembers } from "../../services/teamService";

/**
 * Full Team page section: renders every team member in one unified group.
 */
const TeamSection = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadTeam() {
      try {
        const members = await getTeamMembers();
        if (isMounted) setTeam(members);
      } catch {
        if (isMounted) setTeam([]);
      }
    }

    loadTeam();
    return () => {
      isMounted = false;
    };
  }, []);

  const groupedByDepartment = useMemo(
    () => (team.length ? { "Our Team": team } : {}),
    [team]
  );

  return (
    <section className="py-20 bg-light dark:bg-dark">
      <Container>
        {Object.entries(groupedByDepartment).map(([department, members]) => (
          <div key={department} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-dark dark:text-light mb-8 pb-3 border-b-2 border-primary inline-block">
              {department}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  socials={member.socials}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default TeamSection;