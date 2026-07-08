import React from "react";
import Container from "../ui/Container";
import StatItem from "./StatItem";
import useOnScreen from "../../hooks/useOnScreen";
import stats from "../../data/stats";

/**
 * Dark banner section showing 4 key company statistics, animated with a
 * count-up effect that triggers once the section scrolls into view.
 * Uses a faded background image to visually distinguish this section
 * from the lighter sections above and below it.
 */
const StatsSection = () => {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-dark bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,26,26,0.9), rgba(26,26,26,0.9)), url('https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=80')",
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