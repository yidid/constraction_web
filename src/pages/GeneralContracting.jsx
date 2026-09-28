import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/ui/Container";

const GeneralContracting = () => {
  usePageTitle(
    "General Contractor and Building Construction in Ethiopia",
    "NAF Construction delivers commercial, industrial, residential, and institutional buildings in Ethiopia with coordinated project management and site control."
  );

  return (
    <div>
      <PageHeader
        title="General Contracting and Building Construction"
        subtitle="Commercial, industrial, residential, and institutional construction in Addis Ababa and across Ethiopia."
      />

      <main className="py-20 bg-light dark:bg-dark">
        <Container>
          <div className="max-w-4xl">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              NAF Construction and Trading provides general contracting and building construction services for commercial, industrial, residential, institutional, and public-sector projects in Addis Ababa and across Ethiopia. We coordinate construction activities from scope review and mobilization through structural works, finishing, quality review, and handover.
            </p>
          </div>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark dark:text-light">
                Commercial, Industrial and Residential Construction
              </h2>
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Commercial Buildings</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    We support offices, retail facilities, mixed-use developments, warehouses, and other commercial properties with coordinated building delivery and site supervision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Industrial and Institutional Buildings</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    Our capabilities support industrial facilities, educational buildings, laboratories, training facilities, offices, and public-sector developments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Residential Developments</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    We deliver private homes, apartment developments, multi-unit housing, renovations, and supporting site facilities for property owners and developers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark dark:text-light">
                Turnkey Project Execution and Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-5 leading-relaxed">
                Successful construction requires coordinated planning, procurement, site supervision, quality control, and communication. NAF Construction works with clients and project stakeholders throughout the project lifecycle.
              </p>
              <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>Drawing, specification, and scope review</li>
                <li>Construction planning and site mobilization</li>
                <li>Subcontractor and material coordination</li>
                <li>Structural, finishing, and external works</li>
                <li>Progress communication and handover preparation</li>
              </ul>
            </div>
          </section>

          <section className="mt-16 border-t border-gray-200 dark:border-dark-light pt-16">
            <h2 className="text-3xl font-bold text-dark dark:text-light">
              Quality Control, Building Standards and Safety
            </h2>
            <p className="max-w-4xl text-gray-600 dark:text-gray-300 mt-5 leading-relaxed">
              Construction work is coordinated according to approved drawings, specifications, contract documents, applicable Ethiopian requirements, and project-specific quality procedures. We support material checks, workmanship reviews, inspections, and corrective actions throughout construction. Contractor grades, licenses, insurance, and certifications are confirmed for each tender or contract requirement.
            </p>
          </section>

          <section className="mt-16 bg-navy p-8 sm:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-light">Discuss Your Building Project</h2>
            <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
              Send your drawings, bill of quantities, tender documents, or project brief for an initial construction review.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="inline-flex items-center bg-primary text-light font-bold px-5 py-3 rounded-sm hover:bg-primary-light transition-colors">
                Request a Proposal
              </Link>
              <Link to="/portfolio" className="inline-flex items-center border border-primary-light text-light font-bold px-5 py-3 rounded-sm hover:bg-primary-light hover:text-dark transition-colors">
                View Construction Projects
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default GeneralContracting;
