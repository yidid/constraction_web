import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import Container from "../ui/Container";

/**
 * Two side-by-side cards presenting the company's Mission and Vision
 * as distinct, easily scannable statements rather than a combined paragraph.
 */
const MissionVision = () => {
  return (
    <section className="py-20 bg-light-off">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-light rounded-lg shadow-md p-10">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary">
              <FaBullseye className="text-dark text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-dark mt-6">Our Mission</h3>
            <p className="text-gray-500 mt-3 leading-relaxed">
              To deliver construction projects that combine structural
              integrity, thoughtful design, and honest partnership —
              empowering our clients to build with confidence.
            </p>
          </div>

          <div className="bg-dark rounded-lg shadow-md p-10">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary">
              <FaEye className="text-dark text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-light mt-6">Our Vision</h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              To be the most trusted construction company in the region,
              recognized for transforming skylines while never compromising
              on quality or accountability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;