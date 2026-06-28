// Placeholder blog posts targeting long-tail Ontario keywords.
// Content is stored as structured blocks so the [slug] template can render
// proper H2/H3 hierarchy without a Markdown dependency.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  // Inline link to another page on the site (internal linking for SEO).
  | { type: "cta"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  readingTime: string;
  image: { src: string; alt: string };
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prepare-burlington-lawn-for-winter",
    title: "How to Prepare Your Burlington Lawn for a Canadian Winter",
    excerpt:
      "Ontario winters are tough on turf. Here's how to protect your Burlington lawn so it bounces back lush and green every spring.",
    metaDescription:
      "Protect your Burlington lawn before winter with these expert fall lawn care tips for Ontario homeowners. Free Estimate: call 647-407-1409.",
    date: "2025-10-14",
    readingTime: "5 min read",
    image: {
      src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=70",
      alt: "Frost-covered lawn in late autumn ready for winter in Burlington, Ontario",
    },
    blocks: [
      {
        type: "p",
        text: "If you live in Burlington, you already know how demanding our Canadian winters can be. Heavy snow, freeze-thaw cycles, and months of dormancy put real stress on a lawn. The good news is that a little preparation in the fall makes all the difference between a patchy, struggling lawn in April and a thick, healthy one that greens up early. Here's how to get your Burlington property winter-ready.",
      },
      { type: "h2", text: "Keep Mowing — but Lower the Blade Gradually" },
      {
        type: "p",
        text: "Don't stop mowing too early. Your grass keeps growing until the first hard frost, and going into winter too long invites snow mould and matting. Over your final few cuts, gradually lower the mowing height so your lawn heads into winter a little shorter than usual — but never scalp it in a single pass.",
      },
      {
        type: "p",
        text: "Consistent, well-timed mowing right through fall is one of the simplest ways to protect your turf.",
      },
      {
        type: "cta",
        text: "Want a reliable team to handle those final cuts?",
        href: "/services/lawn-mowing",
        label: "Explore our lawn mowing service",
      },
      { type: "h2", text: "Clear the Leaves Before the Snow Flies" },
      {
        type: "p",
        text: "A thick blanket of wet leaves left on your lawn over winter blocks light and air, traps moisture, and creates the perfect conditions for mould and dead patches. Across Burlington's leafier neighbourhoods like Tyandaga and Roseland, leaf build-up is the number one cause of spring lawn damage.",
      },
      { type: "h3", text: "Why a Thorough Fall Cleanup Matters" },
      {
        type: "ul",
        items: [
          "Prevents snow mould and fungal disease over winter",
          "Stops bare, dead patches from forming under matted leaves",
          "Lets your lawn breathe and store energy before dormancy",
          "Gives your property a clean, cared-for look all winter",
        ],
      },
      {
        type: "cta",
        text: "A professional fall cleanup takes this whole job off your plate.",
        href: "/services/spring-fall-cleanups",
        label: "See our spring & fall cleanup service",
      },
      { type: "h2", text: "Tidy Your Garden Beds and Refresh Mulch" },
      {
        type: "p",
        text: "Cut back spent perennials, clear debris from your beds, and consider topping up mulch around shrubs and trees. A fresh layer of mulch insulates plant roots against Burlington's freeze-thaw swings and gives beds a clean finish heading into the cold months.",
      },
      { type: "h2", text: "Book Early for Spring" },
      {
        type: "p",
        text: "Finally, plan ahead. Spring fills up fast for every landscaper in the GTA West, so the best time to line up your spring cleanup is before winter even arrives. Getting on the schedule early means your lawn gets the early-season attention it needs to thrive.",
      },
      {
        type: "p",
        text: "Nolasco Landscaping helps Burlington homeowners protect their lawns through every Ontario season. Call us at 647-407-1409 for a free, no-obligation estimate on fall cleanups, final mowing, and winter prep.",
      },
    ],
  },
  {
    slug: "best-time-spring-cleanup-hamilton",
    title: "The Best Time to Schedule a Spring Yard Cleanup in Hamilton",
    excerpt:
      "Timing is everything with a spring cleanup. Here's exactly when Hamilton homeowners should book to give their yard the strongest start.",
    metaDescription:
      "Find out the best time to book a spring yard cleanup in Hamilton, Ontario and why early timing matters. Free Estimate: call 647-407-1409.",
    date: "2025-03-06",
    readingTime: "5 min read",
    image: {
      src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=70",
      alt: "Fresh green garden bed in early spring at a Hamilton, Ontario home",
    },
    blocks: [
      {
        type: "p",
        text: "After a long Hamilton winter, there's nothing more satisfying than seeing your yard come back to life. But timing your spring cleanup right is the difference between a lawn that takes off and one that struggles all season. So when exactly should Hamilton homeowners book? Let's break it down.",
      },
      { type: "h2", text: "Wait for the Ground to Dry — but Don't Wait Too Long" },
      {
        type: "p",
        text: "The ideal window for a spring cleanup in Hamilton is usually mid-April to early May. You want to wait until the snow has fully melted and the ground has firmed up — raking or walking on soggy, saturated soil can compact it and damage tender new growth. But don't leave it too late either, or matted debris will smother your lawn just as it's trying to wake up.",
      },
      { type: "h3", text: "Signs Your Yard Is Ready" },
      {
        type: "ul",
        items: [
          "The snow has melted and standing water has drained away",
          "The soil is firm underfoot, not muddy or spongy",
          "You're seeing the first hints of green growth",
          "Overnight hard frosts are becoming rare",
        ],
      },
      { type: "h2", text: "Why Early Cleanups Pay Off Across Hamilton" },
      {
        type: "p",
        text: "From Westdale to Ancaster to Stoney Creek, the yards that look best all summer are almost always the ones that got an early, thorough spring cleanup. Clearing away winter debris lets sunlight and air reach the soil, helps the lawn green up faster, and gives weeds far less room to establish before your grass fills in.",
      },
      {
        type: "cta",
        text: "Not sure what a full spring cleanup includes?",
        href: "/services/spring-fall-cleanups",
        label: "See our spring & fall cleanup service",
      },
      { type: "h2", text: "Book Before the Spring Rush" },
      {
        type: "p",
        text: "Here's the catch: every Hamilton homeowner wants their cleanup done in that same narrow spring window, and schedules fill up fast. The smartest move is to book in late winter or very early spring so you're locked in for the ideal timing rather than waiting weeks for an opening.",
      },
      {
        type: "p",
        text: "Pairing your spring cleanup with ongoing care keeps the momentum going all season.",
      },
      {
        type: "cta",
        text: "Keep your yard effortless all year.",
        href: "/services/property-maintenance",
        label: "Explore our property maintenance plans",
      },
      {
        type: "p",
        text: "Ready to give your Hamilton yard the best possible start this year? Call Nolasco Landscaping at 647-407-1409 for a free, no-obligation spring cleanup estimate — and book early to secure your spot.",
      },
    ],
  },
  {
    slug: "signs-oakville-property-needs-mulch",
    title: "5 Signs Your Oakville Property Needs Professional Mulch Installation",
    excerpt:
      "Mulch does far more than look good. Here are five clear signs it's time to refresh the mulch on your Oakville property.",
    metaDescription:
      "Five signs your Oakville garden beds need fresh mulch installation, and why it matters for plant health. Free Estimate: call 647-407-1409.",
    date: "2025-05-02",
    readingTime: "6 min read",
    image: {
      src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=70",
      alt: "Freshly installed dark mulch in a landscaped garden bed in Oakville, Ontario",
    },
    blocks: [
      {
        type: "p",
        text: "In a town known for beautiful, well-kept properties like Oakville, fresh mulch is one of the easiest ways to keep your landscape looking sharp. But mulch isn't just about curb appeal — it protects your plants, conserves moisture, and keeps weeds down. Here are five signs it's time for a professional mulch refresh on your Oakville property.",
      },
      { type: "h2", text: "1. The Colour Has Faded" },
      {
        type: "p",
        text: "Fresh mulch has a rich, deep colour that frames your beds and makes plants pop. Once it's weathered to a dull grey, it's lost much of its visual punch — and usually much of its function too. Faded mulch is the most obvious sign it's time for a top-up.",
      },
      { type: "h2", text: "2. You're Seeing More Weeds" },
      {
        type: "p",
        text: "A proper layer of mulch suppresses weeds by blocking the light they need to germinate. If weeds are suddenly pushing through your beds across Glen Abbey or Joshua Creek, your mulch layer has likely broken down and thinned out below the depth that keeps them in check.",
      },
      {
        type: "cta",
        text: "Weeds already taking hold?",
        href: "/services/weed-removal",
        label: "See our weed removal service",
      },
      { type: "h2", text: "3. The Soil Dries Out Quickly" },
      {
        type: "p",
        text: "Mulch acts like a blanket, holding moisture in the soil through Ontario's hot, dry summer stretches. If your beds are drying out fast and your plants are wilting between waterings, a fresh layer of mulch will help your soil retain water far more effectively.",
      },
      { type: "h2", text: "4. You Can See Bare Soil or Exposed Roots" },
      {
        type: "p",
        text: "Mulch naturally breaks down and thins over time. When you start seeing patches of bare soil or exposed plant roots, your beds are no longer protected from temperature swings and erosion. That's a clear signal it's time to replenish.",
      },
      { type: "h3", text: "Why Depth Matters" },
      {
        type: "ul",
        items: [
          "Too thin, and weeds push through and moisture escapes",
          "Too thick, and roots can suffocate and rot",
          "The right depth protects roots while letting beds breathe",
          "Professional installation gets the depth right every time",
        ],
      },
      { type: "h2", text: "5. Your Beds Just Look Tired" },
      {
        type: "p",
        text: "Sometimes the whole property just looks a little neglected, even when the lawn is mowed and the hedges are trimmed. Crisp, freshly edged beds with new mulch are often the missing finishing touch that makes an Oakville property look professionally maintained.",
      },
      {
        type: "cta",
        text: "Ready to refresh your beds?",
        href: "/services/mulch-installation",
        label: "Explore our mulch installation service",
      },
      {
        type: "p",
        text: "If your Oakville property is showing any of these five signs, it's time for a refresh. Call Nolasco Landscaping at 647-407-1409 for a free, no-obligation estimate on professional mulch installation — and give your beds the healthy, polished look they deserve.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
