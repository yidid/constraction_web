import React from "react";
import Button from "../ui/Button";

/**
 * Full-viewport-height Hero section for the Home page.
 * Sits behind the transparent Navbar (see Navbar.jsx scroll logic from Step 4).
 * Uses an Unsplash placeholder image as the background until a real photo is supplied.
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
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />

      {/* Content sits above the overlay via relative + z-10 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fadeInUp">
          <span className="inline-block bg-primary text-dark text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            Trusted Since 2005
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light leading-tight">
            Building Your Vision,{" "}
            <span className="text-primary">One Brick at a Time</span>
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-lg leading-relaxed">
            NAF Construction delivers residential and commercial projects
            with precision, integrity, and craftsmanship you can trust from
            groundbreaking to final walkthrough.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Button to="/contact" variant="primary">
              Get a Free Quote
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