// Primary-market cities that get dedicated /locations/[slug] pages for local SEO.

export type LocationFaq = {
  question: string;
  answer: string;
};

export type Location = {
  slug: string;
  city: string;
  metaDescription: string;
  neighbourhoods: string[];
  // City-specific copy paragraphs (500+ words combined per page).
  intro: string[];
  faqs: LocationFaq[];
  // Nearby service-area cities to cross-link.
  nearby: string[];
  image: { src: string; alt: string };
};

export const locations: Location[] = [
  {
    slug: "burlington",
    city: "Burlington",
    metaDescription:
      "Landscaping in Burlington, ON — lawn care, cleanups & more. Free Estimates. Call Nolasco Landscaping at 647-407-1409 today.",
    neighbourhoods: [
      "Aldershot",
      "Millcroft",
      "Tyandaga",
      "Orchard",
      "Brant Hills",
      "South Burlington",
    ],
    intro: [
      "Nolasco Landscaping is proud to be a trusted choice for landscaping in Burlington, Ontario. From the lakefront homes near Spencer Smith Park to the established neighbourhoods of Aldershot and the family streets of Millcroft, we help Burlington homeowners keep their properties looking their absolute best all year round. Our friendly, professional team treats every yard like our own, and we know the local conditions that make Burlington landscaping unique.",
      "Burlington's setting between Lake Ontario and the Niagara Escarpment gives it a beautiful but demanding climate. Wet springs, hot summers, and snowy winters all take a toll on lawns and gardens. Whether you're up on the wooded slopes of Tyandaga, in the leafy Orchard community, or in the mature gardens of South Burlington, our services are tailored to keep your property thriving through every Ontario season.",
      "We offer the full range of landscaping services across Burlington: reliable lawn mowing to keep your turf crisp, thorough yard cleanups to clear away debris, weed removal to keep beds tidy, hedge and shrub trimming for sharp curb appeal, fresh mulch installation, complete property maintenance, and seasonal spring and fall cleanups. Homeowners in Brant Hills and across the city rely on us for dependable, high-quality work and honest, no-pressure free estimates.",
      "As a locally rooted team serving the GTA West and Golden Horseshoe, we understand what Burlington properties need and when they need it — from an early-spring cleanup that wakes up your lawn to a thorough fall leaf removal that protects it through a harsh Canadian winter. When you call Nolasco Landscaping, you get neighbours who care about your property and your community, and who show up reliably to make your outdoor space look its best.",
      "Ready to get started? Booking is easy. Call us at 647-407-1409 for a free, no-obligation estimate, and we'll recommend the right services for your Burlington property. Whether it's a one-time cleanup or a full-season maintenance plan, we'd love to help your yard look the best on the block.",
    ],
    faqs: [
      {
        question: "Do you offer landscaping services across all of Burlington?",
        answer:
          "Yes. We serve homeowners and property managers throughout Burlington, including Aldershot, Millcroft, Tyandaga, Orchard, Brant Hills, and South Burlington, as well as the surrounding GTA West communities.",
      },
      {
        question: "Do you offer free estimates in Burlington?",
        answer:
          "Always. Every quote for Burlington landscaping is free and comes with no pressure or obligation. Just call 647-407-1409 and we'll arrange a convenient time to assess your property.",
      },
      {
        question: "When should I book my spring cleanup in Burlington?",
        answer:
          "Early-to-mid spring is ideal in Burlington — usually April into early May, once the snow has melted and the ground has dried. Spring books up quickly, so we recommend calling early to secure your preferred timing.",
      },
    ],
    nearby: ["Oakville", "Hamilton", "Waterdown", "Milton", "Dundas"],
    image: {
      src: "https://images.unsplash.com/photo-1560749003-f4b1e17e2dfd?auto=format&fit=crop&w=1200&q=70",
      alt: "Beautifully landscaped front yard of a Burlington, Ontario home",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    metaDescription:
      "Landscaping in Hamilton, ON — lawn care, cleanups & more. Free Estimates. Call Nolasco Landscaping at 647-407-1409 today.",
    neighbourhoods: [
      "Ancaster",
      "Dundas",
      "Stoney Creek",
      "Westdale",
      "Binbrook",
      "Waterdown",
    ],
    intro: [
      "Nolasco Landscaping brings reliable, professional landscaping to Hamilton, Ontario and its surrounding communities. From the historic streets of Westdale near McMaster to the established homes of Ancaster and the growing neighbourhoods of Binbrook, we help Hamilton homeowners keep their properties looking sharp and healthy through every season. We're friendly, dependable neighbours who take real pride in our work.",
      "Hamilton's landscape is wonderfully varied, wrapped around the Niagara Escarpment with the Bruce Trail, conservation areas, and waterfalls all around. That natural beauty comes with real gardening challenges — escarpment slopes, mature tree canopies, and the wet, changeable weather of the Golden Horseshoe. Whether you're in leafy Dundas, on a Stoney Creek bench property, or in a Binbrook new build, we tailor our services to suit your specific yard.",
      "We provide the full range of landscaping services across Hamilton: dependable lawn mowing, thorough yard cleanups, root-level weed removal, hedge and shrub trimming for clean curb appeal, fresh mulch installation, complete property maintenance, and seasonal spring and fall cleanups. Homeowners in Waterdown, Ancaster, and across the city count on us for high-quality results and honest, no-pressure free estimates every time.",
      "As a locally focused team that knows the Hamilton area and Ontario's seasons, we understand exactly what your property needs and when. That might mean a deep spring cleanup to clear winter's debris, regular summer mowing to keep your lawn crisp, or a thorough fall leaf removal to protect your turf before the snow arrives. Whatever the season, we show up reliably and leave your outdoor space looking its best.",
      "Getting started couldn't be simpler. Call Nolasco Landscaping at 647-407-1409 for a free, no-obligation estimate, and we'll recommend the right services for your Hamilton property. From one-time cleanups to full-season maintenance plans, we'd be glad to help your yard look its very best.",
    ],
    faqs: [
      {
        question: "Which Hamilton neighbourhoods do you serve?",
        answer:
          "We serve homeowners across Hamilton and the surrounding area, including Ancaster, Dundas, Stoney Creek, Westdale, Binbrook, and Waterdown, plus nearby communities throughout the Golden Horseshoe.",
      },
      {
        question: "Are you available for landscaping in Hamilton and Oakville?",
        answer:
          "Yes. Hamilton and Oakville are both core service areas for us, along with Burlington. We regularly work across all three cities and the communities in between.",
      },
      {
        question: "Do you offer one-time yard cleanups in Hamilton?",
        answer:
          "We do. Many Hamilton customers book a single yard cleanup after a storm, before an event, or when moving into a new home. We also offer recurring seasonal and maintenance services if you'd prefer ongoing care.",
      },
    ],
    nearby: ["Ancaster", "Dundas", "Stoney Creek", "Waterdown", "Grimsby"],
    image: {
      src: "https://images.unsplash.com/photo-1572321497932-54d68d6da2e?auto=format&fit=crop&w=1200&q=70",
      alt: "Lush green landscaped garden at a Hamilton, Ontario residential property",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    metaDescription:
      "Landscaping in Oakville, ON — lawn care, cleanups & more. Free Estimates. Call Nolasco Landscaping at 647-407-1409 today.",
    neighbourhoods: [
      "Kerr Village",
      "Glen Abbey",
      "Bronte",
      "Joshua Creek",
      "Palermo",
    ],
    intro: [
      "Nolasco Landscaping is a trusted name for landscaping in Oakville, Ontario. From the waterfront charm of Bronte Harbour to the manicured streets of Glen Abbey and the executive homes of Joshua Creek, we help Oakville homeowners keep their properties looking immaculate season after season. Our team is friendly, reliable, and genuinely committed to making your outdoor space look its best.",
      "Oakville is known for its beautiful, well-kept properties and mature tree-lined neighbourhoods, and the bar for curb appeal here is high. Keeping a property looking its best in this lakeside town takes consistent, professional care through Ontario's demanding seasons. Whether you're near the shops of Kerr Village, in established Glen Abbey, or in the newer Palermo community to the north, we tailor our services to your property and your standards.",
      "We deliver the full range of landscaping services throughout Oakville: precise lawn mowing for a crisp, even finish, thorough yard cleanups, careful weed removal, expert hedge and shrub trimming, fresh mulch installation that lifts your beds, complete property maintenance, and seasonal spring and fall cleanups. Homeowners in Bronte, Joshua Creek, and across town trust us for meticulous results and honest, no-pressure free estimates.",
      "As a local team that understands Oakville properties and the rhythm of Ontario's seasons, we know just what your landscape needs and when. From an early spring cleanup that revives your lawn to regular summer maintenance and a careful fall leaf removal before winter sets in, we keep your property looking polished year round. We show up when we say we will and leave every yard better than we found it.",
      "Ready to make your Oakville property the best-looking one on the street? Call Nolasco Landscaping at 647-407-1409 for a free, no-obligation estimate. Whether you need a one-time service or a full-season maintenance plan, we'd be delighted to help your outdoor space look its very best.",
    ],
    faqs: [
      {
        question: "Which areas of Oakville do you serve?",
        answer:
          "We serve homeowners throughout Oakville, including Kerr Village, Glen Abbey, Bronte, Joshua Creek, and Palermo, as well as the neighbouring communities of Burlington, Milton, and Mississauga.",
      },
      {
        question: "Do you provide free estimates in Oakville?",
        answer:
          "Yes, every estimate is completely free and carries no obligation. Call 647-407-1409 and we'll arrange a convenient time to look at your Oakville property and recommend the right services.",
      },
      {
        question: "Can you handle recurring lawn care for Oakville properties?",
        answer:
          "Absolutely. Many Oakville homeowners choose recurring weekly or bi-weekly lawn mowing and full-season property maintenance so their yard always looks its best without any effort on their part.",
      },
    ],
    nearby: ["Burlington", "Mississauga", "Milton", "Hamilton"],
    image: {
      src: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=1200&q=70",
      alt: "Manicured lawn and landscaped garden beds at an Oakville, Ontario home",
    },
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
