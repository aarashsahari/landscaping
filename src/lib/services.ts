// All 7 landscaping services. Each entry drives its own /services/[slug] page,
// the services overview grid, sitemap entries, and Service JSON-LD.

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  // Short, card-friendly one-liner.
  shortDescription: string;
  // Used in meta descriptions and intros.
  metaDescription: string;
  // Lucide icon name (resolved in components/Icon).
  icon: string;
  keywords: string[];
  // Long-form intro paragraphs (400+ words combined with the rest of the page).
  intro: string[];
  whatsIncluded: string[];
  faqs: ServiceFaq[];
  images: { src: string; alt: string }[];
};

export const services: Service[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing",
    shortDescription:
      "Crisp, even cuts on a reliable schedule that keep your lawn healthy all season.",
    metaDescription:
      "Professional lawn mowing in Burlington, Hamilton & Oakville. Reliable weekly & bi-weekly service. Call 647-407-1409 for a Free Estimate.",
    icon: "Scissors",
    keywords: [
      "lawn mowing Oakville",
      "lawn care Burlington ON",
      "professional lawn care Oakville Ontario",
      "lawn mowing Hamilton",
    ],
    intro: [
      "A neatly mowed lawn is the foundation of a great-looking property, and our lawn mowing service across Burlington, Hamilton and Oakville keeps your grass looking its best from the first warm days of spring through to the final cut of fall. We tailor every visit to your lawn's growth, the weather, and the season so your turf stays thick, green, and healthy all year long.",
      "Ontario's growing season can be unpredictable — a wet spring one week and a dry, hot stretch the next. Mowing at the right height and frequency matters more here than most homeowners realise. Cut too short and you stress the grass and invite weeds; let it grow too long and you smother it. Our team knows the local conditions across the GTA West and Golden Horseshoe, and we adjust our blades and schedule accordingly to protect the long-term health of your lawn.",
      "Whether you need weekly or bi-weekly lawn care in Burlington, a one-time tidy-up before guests arrive, or full-season property maintenance in Oakville, we show up on time, do a thorough job, and leave your yard looking sharp. Every service includes a clean finish — no clumps left behind, no clippings on your driveway. Friendly, reliable, and professional lawn mowing is what we do best.",
    ],
    whatsIncluded: [
      "Precision mowing at the optimal height for your grass type and the season",
      "Crisp edging and line trimming around beds, fences, trees, and walkways",
      "Blowing clippings off driveways, sidewalks, and patios for a clean finish",
      "Alternating mowing patterns to prevent soil compaction and ruts",
      "Sharp, sanitised blades to avoid tearing and spreading lawn disease",
      "Flexible weekly or bi-weekly scheduling to match your lawn's growth",
    ],
    faqs: [
      {
        question: "How often should I get my lawn mowed in Burlington?",
        answer:
          "During the peak growing months of May through September, most Burlington and Oakville lawns look their best with weekly mowing. In the cooler shoulder seasons of spring and fall, bi-weekly service is usually enough. We'll recommend a schedule based on your lawn during your free estimate.",
      },
      {
        question: "Do you offer recurring lawn mowing or just one-time cuts?",
        answer:
          "Both. Many customers in Hamilton and Oakville choose recurring weekly or bi-weekly service so they never have to think about it, but we're also happy to provide a one-time cut for a special occasion or to get an overgrown lawn back under control.",
      },
      {
        question: "What height should my lawn be cut to?",
        answer:
          "For most cool-season grasses common across Ontario, we keep lawns between 6 and 9 cm (about 2.5 to 3.5 inches). Slightly taller grass shades the soil, holds moisture during dry spells, and crowds out weeds naturally.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1592420114146-9f3c9fbfff3b?auto=format&fit=crop&w=1200&q=70",
        alt: "Freshly mowed green lawn with clean stripe patterns at an Ontario home",
      },
      {
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=70",
        alt: "Well-maintained backyard lawn surrounded by garden beds in Burlington",
      },
    ],
  },
  {
    slug: "yard-cleanups",
    name: "Yard Cleanups",
    shortDescription:
      "Clear away debris, leaves, and clutter for a fresh, tidy yard you'll love.",
    metaDescription:
      "Yard cleanup in Burlington, Hamilton & Oakville. Leaf removal, debris hauling & full property tidy-ups. Call 647-407-1409 for a Free Estimate.",
    icon: "Trash2",
    keywords: [
      "yard cleanup Burlington",
      "yard cleanups Hamilton",
      "leaf removal Oakville",
      "debris removal Burlington ON",
    ],
    intro: [
      "Life gets busy, and yards have a way of collecting fallen leaves, broken branches, dead growth, and general clutter before you know it. Our yard cleanup service in Burlington, Hamilton and Oakville takes that whole job off your plate, transforming an overgrown or messy property into a clean, welcoming outdoor space in a single visit.",
      "A thorough yard cleanup does more than just look good. Removing matted leaves and debris lets your lawn breathe, prevents mould and pests from settling in over the wet Ontario seasons, and gives your garden beds a healthy fresh start. We handle everything from light seasonal tidy-ups to heavy-duty cleanups on neglected or newly purchased properties across the GTA West.",
      "We bring our own equipment, tarps, and disposal so you don't have to lift a finger or worry about where the waste goes. When we're finished, every corner of your yard is raked, cleared, and blown clean. It's one of our most popular services for homeowners who want their property to look its best without spending their whole weekend on it.",
    ],
    whatsIncluded: [
      "Raking and removal of leaves, sticks, and accumulated yard debris",
      "Clearing of garden beds, fence lines, and hard-to-reach corners",
      "Cutting back dead perennials, annuals, and spent growth",
      "Light weeding of beds and walkways",
      "Removal of small fallen branches and storm debris",
      "Hauling away and responsible disposal of all collected material",
      "Final blow-down of patios, decks, and walkways",
    ],
    faqs: [
      {
        question: "Do you do one-time yard cleanups or only recurring service?",
        answer:
          "We're happy to do a single one-time yard cleanup whenever you need it — many Burlington and Hamilton customers book us after a storm, before a big event, or when moving into a new home. We also offer recurring seasonal cleanups if you'd prefer ongoing care.",
      },
      {
        question: "Do you haul away the debris you collect?",
        answer:
          "Yes. Every yard cleanup includes loading and responsible disposal of all the leaves, branches, and debris we gather, so you're never left with bags piled at the curb.",
      },
      {
        question: "Can you clean up an overgrown or neglected property?",
        answer:
          "Absolutely. Overgrown yards are one of our specialties. Whether it's a rental, an estate property, or a home that's been vacant, we'll assess it during your free estimate and bring the right crew and equipment to get it back in shape.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1508497338886-fc18de46c2d3?auto=format&fit=crop&w=1200&q=70",
        alt: "Autumn leaves being raked and cleared from a residential yard in Hamilton",
      },
    ],
  },
  {
    slug: "weed-removal",
    name: "Weed Removal",
    shortDescription:
      "Pull and prevent weeds so your beds, lawn, and walkways stay clean and healthy.",
    metaDescription:
      "Weed removal in Hamilton, Burlington & Oakville. Hand-pulling & bed maintenance for lasting results. Call 647-407-1409 for a Free Estimate.",
    icon: "Sprout",
    keywords: [
      "weed removal Hamilton",
      "weed control Burlington",
      "weed pulling Oakville",
      "garden bed maintenance Hamilton Ontario",
    ],
    intro: [
      "Weeds are relentless, and Ontario's wet springs give them every chance to take over your garden beds, interlock, and lawn. Our weed removal service in Hamilton, Burlington and Oakville keeps them in check with careful hand-pulling and bed maintenance that protects your plants and gives you back a clean, polished landscape.",
      "Unlike a quick spray-and-go, we focus on removing weeds at the root so they're far less likely to come straight back. We clear invasive growth from garden beds, between paving stones, along fence lines, and in the cracks of driveways and walkways. The result is a tidy property where your flowers, shrubs, and lawn aren't competing with aggressive weeds for water and nutrients.",
      "Regular weed removal is one of the easiest ways to keep a property looking cared-for year round. We can handle it as a one-time reset for a bed that's gotten out of hand, or as part of ongoing property maintenance across the Golden Horseshoe so weeds never get a foothold again. Either way, we leave your beds neat, mulch-ready, and looking their best.",
    ],
    whatsIncluded: [
      "Hand-pulling of weeds from garden beds, removing them at the root",
      "Clearing weeds from interlock, walkways, and driveway cracks",
      "Edging and tidying along fence lines and bed borders",
      "Removal of invasive ground-cover and unwanted growth",
      "Light cultivation of beds to discourage regrowth",
      "Disposal of all pulled weeds and debris",
    ],
    faqs: [
      {
        question: "How do you remove weeds without harming my plants?",
        answer:
          "We primarily hand-pull and hand-tool weeds, which lets us target the unwanted growth precisely without damaging your flowers, shrubs, or lawn. It's the safest, most thorough approach for established garden beds in Hamilton and Burlington.",
      },
      {
        question: "How long until the weeds come back?",
        answer:
          "Because we remove weeds at the root rather than just cutting them off, results last much longer. Pairing weed removal with a fresh layer of mulch slows regrowth even more. For the cleanest beds year-round, many customers add us to a recurring maintenance schedule.",
      },
      {
        question: "Can you tackle weeds growing in my interlock and driveway?",
        answer:
          "Yes. Weeds in the cracks of interlock, patios, and driveways are a common request across Oakville and Burlington. We clear them out and tidy the joints so your hardscaping looks sharp again.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=70",
        alt: "Clean, weed-free garden bed with healthy plants at an Oakville property",
      },
    ],
  },
  {
    slug: "hedge-shrub-trimming",
    name: "Hedge & Shrub Trimming",
    shortDescription:
      "Shape and tidy hedges and shrubs for clean lines and healthier growth.",
    metaDescription:
      "Hedge trimming in Oakville, Burlington & Hamilton. Clean shaping for healthier shrubs & sharp curb appeal. Call 647-407-1409 for a Free Estimate.",
    icon: "TreePine",
    keywords: [
      "hedge trimming Oakville",
      "shrub trimming Burlington",
      "hedge trimming Hamilton",
      "bush trimming Oakville Ontario",
    ],
    intro: [
      "Crisp, well-shaped hedges instantly lift the look of any property, and our hedge and shrub trimming service in Oakville, Burlington and Hamilton delivers clean lines that make your whole landscape feel cared-for. Whether you have a formal cedar hedge, flowering shrubs, or overgrown bushes that have lost their shape, we bring them back to their best.",
      "Trimming is about more than appearance — it keeps your plants healthy. Proper, well-timed pruning encourages dense, even growth, improves air circulation, removes dead or diseased branches, and helps flowering shrubs bloom better. Knowing when and how much to cut for each plant variety matters, especially with Ontario's distinct seasons, and our team prunes with that knowledge in mind.",
      "From a single overgrown shrub to a full perimeter of hedges, we shape everything to your preference, clean up every clipping, and haul the trimmings away. The result is sharp, professional curb appeal and healthier plants that hold their shape longer. It's one of the fastest ways to make a property across the GTA West look freshly maintained.",
    ],
    whatsIncluded: [
      "Precision shaping of hedges for clean, even lines",
      "Trimming and pruning of shrubs and ornamental bushes",
      "Removal of dead, damaged, or crossing branches",
      "Height and width reduction on overgrown hedges",
      "Shaping that encourages dense, healthy regrowth",
      "Full cleanup and removal of all trimmings and clippings",
    ],
    faqs: [
      {
        question: "When is the best time to trim hedges in Oakville?",
        answer:
          "For most hedges and shrubs across Oakville and Burlington, late spring after the first flush of growth and again in late summer are ideal. Some flowering shrubs are best pruned right after they bloom. We'll time the work to suit your specific plants during your free estimate.",
      },
      {
        question: "Can you reshape badly overgrown hedges?",
        answer:
          "Yes. Overgrown and misshapen hedges are very common, and we can bring them back into a clean, manageable shape. For severely overgrown cedars we sometimes recommend staging the work over a season or two to keep the plant healthy, and we'll explain the plan up front.",
      },
      {
        question: "Do you clean up and remove the trimmings?",
        answer:
          "Always. Every hedge and shrub trimming service includes gathering, hauling, and disposing of all the clippings, so your property looks immaculate when we leave.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1599685315640-4a9ba2613f46?auto=format&fit=crop&w=1200&q=70",
        alt: "Neatly trimmed green hedge with clean straight lines along a walkway",
      },
    ],
  },
  {
    slug: "mulch-installation",
    name: "Mulch Installation",
    shortDescription:
      "Fresh mulch that protects your beds, locks in moisture, and looks fantastic.",
    metaDescription:
      "Mulch installation in Burlington, Oakville & Hamilton. Fresh mulch for healthier beds & rich curb appeal. Call 647-407-1409 for a Free Estimate.",
    icon: "Layers",
    keywords: [
      "mulch installation Burlington",
      "mulch installation Oakville",
      "mulching Hamilton Ontario",
      "garden mulch Burlington ON",
    ],
    intro: [
      "Few things refresh a property as quickly and affordably as a fresh layer of mulch, and our mulch installation service in Burlington, Oakville and Hamilton gives your garden beds a rich, finished look while doing your plants a world of good. Clean, evenly spread mulch is the detail that makes an entire landscape look professionally maintained.",
      "Mulch is hard-working, not just decorative. A proper layer insulates plant roots against Ontario's temperature swings, locks moisture into the soil through dry summer stretches, suppresses weeds, and slowly enriches the soil as it breaks down. Getting the depth right is key — too thin and weeds push through, too thick and you can smother roots. We apply it at the ideal depth for healthy beds.",
      "We handle the entire job: prepping and edging your beds, removing existing weeds, sourcing quality mulch, and spreading it cleanly around your plants, trees, and shrubs. Whether you want a deep natural brown, black, or cedar mulch, we leave your beds looking crisp and your curb appeal noticeably improved. It's one of the best-value upgrades for any property across the Golden Horseshoe.",
    ],
    whatsIncluded: [
      "Bed preparation, edging, and clean-up before mulching",
      "Removal of existing weeds so they don't push through",
      "Supply of quality mulch in your preferred colour and type",
      "Even application at the ideal depth for plant health and weed control",
      "Careful mulching around trees, shrubs, and delicate plants",
      "Tidy finish with clean bed edges and a polished look",
    ],
    faqs: [
      {
        question: "How often should mulch be replaced?",
        answer:
          "For most Burlington and Oakville properties, topping up or refreshing mulch once a year — usually in spring — keeps beds looking their best and maintains the weed-suppressing, moisture-holding benefits. Some beds with a thick existing layer can go a little longer.",
      },
      {
        question: "What kind of mulch do you use?",
        answer:
          "We typically install natural shredded bark and cedar mulches in brown, black, or red, depending on your preference and the look you want. We'll talk through the options during your free estimate and recommend what suits your beds and plantings best.",
      },
      {
        question: "Do I need to remove my old mulch first?",
        answer:
          "Usually not. In most cases we simply refresh the existing layer and top it up to the right depth. If the old mulch has matted, broken down, or harbours weeds, we'll clean it up as part of the bed prep before laying the fresh mulch.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=70",
        alt: "Freshly mulched garden bed with dark brown mulch around healthy shrubs",
      },
    ],
  },
  {
    slug: "property-maintenance",
    name: "Property Maintenance",
    shortDescription:
      "Ongoing, all-in-one care that keeps your property looking sharp year round.",
    metaDescription:
      "Property maintenance in Burlington, Hamilton & Oakville. All-in-one seasonal lawn & garden care. Call 647-407-1409 for a Free Estimate.",
    icon: "ClipboardCheck",
    keywords: [
      "property maintenance Burlington",
      "grounds maintenance Oakville",
      "lawn and garden maintenance Hamilton",
      "property maintenance Burlington ON",
    ],
    intro: [
      "Keeping a property looking its best takes consistent attention through every season, and our property maintenance service in Burlington, Hamilton and Oakville bundles all of that ongoing care into one reliable, hassle-free package. Instead of juggling separate visits for mowing, weeding, trimming, and cleanups, you get a single trusted team that keeps everything in top shape all year.",
      "Our maintenance plans are built around your property and Ontario's seasons. That means regular lawn mowing and edging through summer, weed removal and bed care to keep gardens tidy, hedge and shrub trimming to maintain clean lines, and seasonal cleanups in spring and fall to handle leaves, debris, and the transitions between seasons. We adjust the schedule as conditions change so nothing gets neglected.",
      "Property maintenance is ideal for busy homeowners, landlords, and property managers across the GTA West who want their grounds consistently presentable without lifting a finger. You get the same friendly, professional crew each visit, predictable service you can count on, and a property that always looks cared-for. It's the easiest way to protect your investment and your curb appeal year round.",
    ],
    whatsIncluded: [
      "Scheduled lawn mowing, edging, and trimming through the season",
      "Ongoing weed removal and garden bed maintenance",
      "Regular hedge and shrub trimming to maintain shape",
      "Spring and fall cleanups handled automatically",
      "Mulch top-ups and bed refreshes as needed",
      "Consistent, reliable crews and predictable scheduling",
      "Proactive attention so small issues never become big ones",
    ],
    faqs: [
      {
        question: "What's included in a property maintenance plan?",
        answer:
          "Our plans typically combine regular lawn mowing, weed removal, hedge and shrub trimming, bed maintenance, and seasonal spring and fall cleanups. We tailor the exact mix and frequency to your property in Burlington, Hamilton or Oakville so you only pay for what you need.",
      },
      {
        question: "Do you offer maintenance for rental and managed properties?",
        answer:
          "Yes. We work with plenty of landlords and property managers across the Golden Horseshoe who need dependable, consistent grounds care. We can service single properties or multiple units and provide reliable, professional results every visit.",
      },
      {
        question: "Can I customise how often you visit?",
        answer:
          "Absolutely. Some customers want weekly attention during peak season, others prefer bi-weekly or monthly visits. We'll build a schedule that fits your property and budget, and adjust it through the seasons as your lawn and gardens need.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=70",
        alt: "Well-maintained residential property with tidy lawn and landscaped beds",
      },
    ],
  },
  {
    slug: "spring-fall-cleanups",
    name: "Spring & Fall Cleanups",
    shortDescription:
      "Seasonal resets that get your yard ready for the year ahead — and winter behind.",
    metaDescription:
      "Spring & fall cleanups in Hamilton, Burlington & Oakville. Get your yard season-ready. Call 647-407-1409 for a Free Estimate.",
    icon: "Leaf",
    keywords: [
      "spring cleanup Hamilton",
      "fall cleanup Oakville",
      "spring yard cleanup Burlington",
      "fall leaf cleanup Hamilton Ontario",
    ],
    intro: [
      "Ontario's seasons are dramatic, and your yard needs a proper reset twice a year to handle them. Our spring and fall cleanup service in Hamilton, Burlington and Oakville gets your property ready for the growing season and then buttons it up before winter, so your lawn and gardens come through every transition healthy and looking great.",
      "A spring cleanup clears away the matted leaves, dead growth, and debris that winter leaves behind, letting your lawn breathe and your garden beds wake up. We rake, dethatch where needed, cut back perennials, tidy beds, and set the stage for a lush, healthy season ahead. It's the single best thing you can do in early spring to get your Burlington or Hamilton property off to a strong start.",
      "A fall cleanup is just as important. Removing fallen leaves and spent growth before the snow flies prevents mould, pests, and dead patches, and protects your lawn over our harsh Canadian winters. We clear every leaf, cut back the garden, and leave your property neat and winter-ready. Booked at the right time, these two seasonal cleanups keep your landscape thriving year after year across the GTA West.",
    ],
    whatsIncluded: [
      "Thorough raking and removal of leaves and winter debris",
      "Cutting back perennials, ornamental grasses, and spent growth",
      "Clearing and tidying all garden beds and borders",
      "Light dethatching and lawn clean-up where needed",
      "Edging beds and walkways for a crisp seasonal finish",
      "Removal of fallen branches and storm debris",
      "Hauling away and disposing of all collected material",
    ],
    faqs: [
      {
        question: "When is the best time to schedule a spring cleanup in Burlington?",
        answer:
          "The ideal window for a spring cleanup across Burlington and Hamilton is usually early-to-mid spring, once the snow has melted and the ground has dried out but before new growth really takes off — often April into early May. Booking early helps you secure a spot, as spring fills up fast.",
      },
      {
        question: "What is included in a fall cleanup?",
        answer:
          "A fall cleanup includes thorough leaf removal, cutting back perennials and dead growth, clearing and tidying garden beds, removing fallen branches, and hauling all of it away. The goal is a clean, winter-ready property that comes through the cold season healthy.",
      },
      {
        question: "Do I really need both a spring and a fall cleanup?",
        answer:
          "For the healthiest lawn and gardens in our Ontario climate, yes. The fall cleanup protects your property heading into harsh winters, and the spring cleanup clears the damage winter leaves behind. Together they bookend the season and keep your Oakville or Burlington yard thriving.",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=70",
        alt: "Colourful autumn leaves covering a lawn ready for a fall cleanup in Ontario",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Returns up to `count` services other than the given slug — used for
// "Also Popular" internal linking on each service page.
export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
