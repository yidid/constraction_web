import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import StatItem from "./StatItem";
import useOnScreen from "../../hooks/useOnScreen";
import { getCompanyStats } from "../../services/statsService";

/**
 * Dark banner section showing 4 key company statistics, animated with a
 * count-up effect that triggers once the section scrolls into view.
 * Uses a faded background image to visually distinguish this section
 * from the lighter sections above and below it.
 */
const StatsSection = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.3 });
  const [stats, setStats] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      const profile = await getCompanyStats();

      if (isMounted) {
        const yearsOfExperience = Math.max(0, new Date().getFullYear() - (profile.foundedYear ?? 2005));

        setStats([
          { id: "years", value: yearsOfExperience, suffix: "+", label: "Years of Experience" },
          { id: "projects", value: profile.projects ?? 250, suffix: "+", label: "Projects Completed" },
          { id: "clients", value: profile.clients ?? 180, suffix: "+", label: "Happy Clients" },
          { id: "team", value: profile.team ?? 45, suffix: "+", label: "Team Members" },
        ]);
      }
    }

    loadStats();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-dark bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(24, 31, 88, 0.9), rgba(26,26,26,0.9)), url('https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              startCounting={isVisible}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;