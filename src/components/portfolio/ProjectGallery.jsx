import React, { useState } from "react";
import ImageLightbox from "./ImageLightbox";

/**
 * Thumbnail grid for a project's gallery images. Clicking any thumbnail
 * opens the full-screen ImageLightbox at that image's index.
 */
const ProjectGallery = ({ images = [] }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isLightboxOpen = lightboxIndex !== null;

  if (!images || images.length === 0) return null;

  const goNext = () => setLightboxIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="h-48 rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`View gallery photo ${index + 1}`}
          >
            <img
              src={image}
              alt={`Project gallery thumbnail ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {isLightboxOpen && (
        <ImageLightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
};

export default ProjectGallery;