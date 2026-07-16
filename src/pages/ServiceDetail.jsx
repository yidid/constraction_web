import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import usePageTitle from "../hooks/usePageTitle";
import Container from "../components/ui/Container";
import CallToAction from "../components/common/CallToAction";
import services from "../data/services";

/**
 * Dynamic route rendering a single service's full detail, based on the
 * :serviceId URL param. Falls back to a redirect to the 404 page if the
 * param doesn't match any known service (e.g., a mistyped or stale URL).
 */
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  // Must call usePageTitle unconditionally (React hooks rule) — guard the value instead
  usePageTitle(
    service ? service.title : "Service Not Found",
    service ? service.fullDescription.slice(0, 155) : ""
  );

  // If no matching service is found, redirect to the 404 page rather than crashing
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  // "Related services": all other services excluding the current one, capped at 3
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div>
      <section className="bg-dark pt-32 pb-16">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm mb-6 transition-colors duration-200"
          >
            <FaArrowLeft size={12} /> Back to Services
          </Link>

          <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary">
            <Icon className="text-dark text-3xl" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-light mt-6">
            {service.title}
          </h1>
        </Container>
      </section>

      <section className="py-16 bg-light">
        <Container>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>
        </Container>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 bg-light-off">
          <Container>
            <h2 className="text-2xl font-bold text-dark mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((related) => {
                const RelatedIcon = related.icon;
                return (
                  <Link
                    key={related.id}
                    to={`/services/${related.id}`}
                    className="bg-light rounded-lg p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-dark">
                      <RelatedIcon className="text-primary text-lg" />
                    </div>
                    <h3 className="font-bold text-dark mt-4">
                      {related.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <CallToAction />
    </div>
  );
};

export default ServiceDetail;