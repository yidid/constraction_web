import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import Container from "../ui/Container";

/**
 * Two side-by-side cards presenting the company's Mission and Vision
 * as distinct, easily scannable statements.
 */
const MissionVision = () => {
  return (
    <section className="py-20 bg-light-off dark:bg-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-light dark:bg-dark-light rounded-lg shadow-md p-10">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary dark:bg-light">
              <FaBullseye className="text-light dark:text-primary text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-dark dark:text-light mt-6">
              Our Mission
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mt-3 leading-relaxed">
              Our mission is to provide reliable and cost-effective
              construction solutions by combining technical expertise,
              quality materials, and a client-centered approach to create
              lasting value for our customers and stakeholders, while
              actively fostering growth by providing work opportunities for
              young professionals.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-light dark:bg-dark-light rounded-lg shadow-md p-10">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary dark:bg-light">
              <FaEye className="text-light dark:text-primary text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-dark dark:text-light mt-6">
              Our Vision
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mt-3 leading-relaxed">
              To redefine excellence in construction by creating landmark
              projects that strengthen communities, embrace innovation, and
              leave a lasting legacy for future generations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;