import React, { useEffect } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

/**
 * Full-screen lightbox overlay for viewing a project's gallery images
 * at full size. Supports closing via the X button, clicking the backdrop,
 * or pressing Escape, and navigating via arrow buttons or arrow keys.
 *
 * @param {string[]} images - array of image URLs
 * @param {number} activeIndex - currently displayed image index
 * @param {function} onClose - closes the lightbox
 * @param {function} onNext - advances to the next image
 * @param {function} onPrev - goes to the previous image
 */
const ImageLightbox = ({ images, activeIndex, onClose, onNext, onPrev }) => {
  // Keyboard support: Escape closes, arrow keys navigate
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 text-light text-3xl hover:text-primary transition-colors duration-200"
      >
        <HiX />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 w-11 h-11 flex items-center justify-center rounded-full bg-light/10 text-light hover:bg-primary hover:text-dark transition-colors duration-200"
      >
        <HiChevronLeft size={24} />
      </button>

      {/* Stop propagation so clicking the image itself doesn't close the lightbox */}
      <img
        src={images[activeIndex]}
        alt={`Gallery view ${activeIndex + 1} of ${images.length}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-full rounded-lg shadow-2xl object-contain"
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-light/10 text-light hover:bg-primary hover:text-dark transition-colors duration-200"
      >
        <HiChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 text-gray-400 text-sm">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageLightbox;