import React from "react";
import Button from "../ui/Button";

/**
 * Full-viewport-height Hero section for the Home page.
 * Sits behind the transparent Navbar.
 */
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark gradient overlay for text readability over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/50" />

      {/* Content sits above the overlay via relative + z-10 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fadeInUp">
          
          {/* Badge: Sky Blue fill + Dark text for high contrast */}
          <span className="inline-block bg-primary-light text-slate-950 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Trusted Since 2010
          </span>

          {/* Heading: Pure White text with Sky Blue highlight */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Solid grounds,{" "}
            <br />
            <span className="text-primary-light">Sharp execution</span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-slate-200 text-lg mt-6 max-w-lg leading-relaxed">
            Bridging the gap between premium material sourcing and masterful architectural execution. 
            We translate sophisticated designs into high-end, permanent realities through rigorous field management and absolute geometric precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-9">
            <Button to="/contact" variant="primary">
              Contact Us
            </Button>
            <Button to="/portfolio" variant="outline">
              View Our Work
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;