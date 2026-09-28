import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/ui/Container";

const TradingSupply = () => {
  usePageTitle(
    "Construction Materials Supply in Ethiopia",
    "Source bulk construction materials in Ethiopia through NAF Construction and Trading. Request material availability, pricing, and delivery information."
  );

  return (
    <div>
      <PageHeader
        title="Construction Materials Supply and Trading"
        subtitle="Material sourcing and procurement coordination for projects in Addis Ababa and across Ethiopia."
      />

      <main className="py-20 bg-light dark:bg-dark">
        <Container>
          <div className="max-w-4xl">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              NAF Construction and Trading supports contractors, developers, government projects, procurement teams, and private clients with construction material sourcing and supply coordination in Addis Ababa and across Ethiopia. We help clients review requirements, coordinate supplier availability, prepare quotations, and plan delivery according to project schedules and approved specifications.
            </p>
          </div>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark dark:text-light">
                Materials for Commercial and Infrastructure Projects
              </h2>
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Reinforcement and Structural Materials</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    Request availability and pricing for reinforcement steel, structural steel, concrete-related materials, and other approved structural requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Cement, Aggregates and Concrete Materials</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    We support procurement requirements for cement, aggregates, sand, concrete materials, and other bulk inputs required for building and civil works.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark dark:text-light">Finishing and Architectural Materials</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                    Material categories may include tiles, gypsum products, plastering materials, stone, paint, fixtures, and other approved finishing requirements. Confirm available brands and specifications with our procurement team.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-dark dark:text-light">
                Bulk Procurement for Large-Scale Developments
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-5 leading-relaxed">
                Large construction projects require consistent supply, accurate quantities, approved specifications, and dependable delivery coordination. Send your bill of quantities, material schedule, tender documents, or technical specifications for review.
              </p>
              <h3 className="text-xl font-bold text-dark dark:text-light mt-8">Logistics and Timely Site Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                We coordinate material requirements with supplier availability, quantities, packaging, delivery locations, and project schedules to support planned site delivery.
              </p>
              <h3 className="text-xl font-bold text-dark dark:text-light mt-8">Equipment and Site Requirements</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Contact us regarding equipment sourcing, site requirements, tools, and construction logistics for larger projects. Specific equipment categories are confirmed for each approved request.
              </p>
            </div>
          </section>

          <section className="mt-16 bg-navy p-8 sm:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-light">Request a Bulk Material Quotation</h2>
            <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
              Send your material list, bill of quantities, required specifications, delivery location, and target delivery date. Our procurement team will respond with availability and quotation information.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="inline-flex items-center bg-primary text-light font-bold px-5 py-3 rounded-sm hover:bg-primary-light transition-colors">
                Request Material Pricing
              </Link>
              <Link to="/services/general-contracting" className="inline-flex items-center border border-primary-light text-light font-bold px-5 py-3 rounded-sm hover:bg-primary-light hover:text-dark transition-colors">
                View Contracting Services
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default TradingSupply;
