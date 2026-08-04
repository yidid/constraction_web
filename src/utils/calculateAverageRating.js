/**
 * Calculates the average rating from an array of testimonial objects,
 * rounded to one decimal place. Used by the Testimonials page summary
 * banner so the displayed average stays in sync with actual data —
 * never hardcoded and never drifts out of date as reviews are added.
 *
 * @param {Array<{rating: number}>} testimonials
 * @returns {number} average rating (e.g., 4.7)
 */
const calculateAverageRating = (testimonials) => {
  if (!testimonials.length) return 0;

  const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((total / testimonials.length) * 10) / 10;
};

export default calculateAverageRating;