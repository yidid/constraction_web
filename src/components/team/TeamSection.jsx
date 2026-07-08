import React, { useMemo } from "react";
import Container from "../ui/Container";
import TeamMemberCard from "./TeamMemberCard";
import team from "../../data/team";

/**
 * Full Team page section: groups team members by department and renders
 * each group under its own heading, rather than one flat undifferentiated
 * grid — reinforcing organizational structure and credibility.
 */
const TeamSection = () => {
  // Group team members by department, preserving the order departments
  // first appear in the data array.
  const groupedByDepartment = useMemo(() => {
    return team.reduce((groups, member) => {
      if (!groups[member.department]) {
        groups[member.department] = [];
      }
      groups[member.department].push(member);
      return groups;
    }, {});
  }, []);

  return (
    <section className="py-20 bg-light">
      <Container>
        {Object.entries(groupedByDepartment).map(([department, members]) => (
          <div key={department} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-dark mb-8 pb-3 border-b-2 border-primary inline-block">
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