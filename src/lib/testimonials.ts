// Placeholder customer reviews. TODO: Replace with real Google reviews at launch.

export type Testimonial = {
  name: string;
  location: string;
  stars: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Aldershot, Burlington",
    stars: 5,
    text: "Nolasco did an amazing spring cleanup on our Burlington home — they cleared every last leaf, cut back the beds, and left the yard looking brand new. Friendly, on time, and so reasonably priced. We've already booked them for the rest of the season!",
  },
  {
    name: "David & Karen R.",
    location: "Westdale, Hamilton",
    stars: 5,
    text: "Best hedge trimming service in Hamilton, hands down. Our cedars were badly overgrown and they reshaped them perfectly, then cleaned up every clipping. So professional from start to finish. Highly recommend to anyone in the area.",
  },
  {
    name: "Michael T.",
    location: "Glen Abbey, Oakville",
    stars: 5,
    text: "I called for a free estimate in Oakville and they came the next day. No pressure at all, fair price, and the lawn mowing and mulch work they did was top quality. It's rare to find a landscaper this reliable. They've earned a customer for life.",
  },
];
