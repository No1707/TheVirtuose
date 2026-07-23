export type Category =
  | "Brand Film"
  | "Advertising"
  | "Social & Reels"
  | "Long Form";

export interface Work {
  slug: string;
  index: string; // reel position, e.g. "01"
  title: string;
  client: string;
  category: Category;
  year: string;
  /** Runtime as a timecode label, e.g. "01:48". */
  length: string;
  tagline?: string;
  summary?: string;
  /** Longer narrative — kept for future case studies, not rendered today. */
  narrative?: string[];
  role?: string[];
  deliverables?: string[];
  /** Number of still frames to render in a detail gallery. */
  frames?: number;
  /** Real media, once uploaded through the CMS. */
  videoUrl?: string;
  posterUrl?: string;
  /** Hue/feel key used to differentiate the monochrome placeholder screens. */
  tone: number;
  /** True for vertical 9:16 reels (rather than landscape 16:9). */
  vertical?: boolean;
}

export const works: Work[] = [
  {
    slug: "nocturne",
    index: "01",
    title: "Nocturne",
    client: "Maison Lumière",
    category: "Brand Film",
    year: "2025",
    length: "01:48",
    tagline: "A fragrance house, cut like a held breath.",
    summary:
      "A brand film for a nightfall fragrance — assembled from two days of rushes and graded to candle-warm shadow.",
    narrative: [
      "Maison Lumière arrived with ninety minutes of rushes and no structure. We built the piece around a single unbroken evening — the hour when a room goes from lamplight to dark.",
      "The grade does the heavy lifting: highlights pulled back, blacks kept rich and readable, warm enough that skin reads like candlelight rather than a screen.",
      "Delivered as a 90-second hero cut plus nine verticals sized for the launch window across paid and organic.",
    ],
    role: ["Edit", "Colour grade", "Sound design", "Titles"],
    deliverables: ["90s hero film", "9× vertical cutdowns", "Stills package"],
    frames: 4,
    tone: 24,
  },
  {
    slug: "afterglow",
    index: "02",
    title: "Afterglow",
    client: "Atelier V728",
    category: "Advertising",
    year: "2025",
    length: "00:30",
    tagline: "Thirty seconds that had to earn a second watch.",
    summary:
      "A broadcast-and-online spot for a fashion label — one motif, cut to the beat, built to loop.",
    narrative: [
      "A thirty-second spot lives or dies on rhythm. We built Afterglow around a single recurring gesture and let the edit do the talking — match cuts on movement, a hold exactly where the eye wants to rest.",
      "The negative space is deliberate. On a monochrome grade, the product becomes the brightest thing in the frame without a single graphic overlay.",
    ],
    role: ["Edit", "Colour grade", "Motion", "Sound"],
    deliverables: ["30s spot", "15s & 6s cutdowns", "Loop version"],
    frames: 3,
    tone: 0,
  },
  {
    slug: "static-bloom",
    index: "03",
    title: "Static Bloom",
    client: "Kösk Studios",
    category: "Social & Reels",
    year: "2024",
    length: "00:22",
    tagline: "A reel engineered for the first two seconds.",
    summary:
      "A vertical-native series for a record label — motion typography, hard cuts, made to stop a thumb.",
    narrative: [
      "Social isn't a smaller cinema screen; it's its own grammar. Static Bloom was cut vertically from the first assembly, with the hook front-loaded into the opening two seconds.",
      "We ran the series as a repeatable template so the label could keep the look consistent across a full release cycle without re-inventing it each drop.",
    ],
    role: ["Concept", "Edit", "Motion type", "Sound"],
    deliverables: ["6× vertical reels", "Template kit", "Caption set"],
    frames: 3,
    tone: 210,
    vertical: true,
  },
  {
    slug: "the-long-take",
    index: "04",
    title: "The Long Take",
    client: "Vireo",
    category: "Long Form",
    year: "2024",
    length: "42:10",
    tagline: "A founder conversation that doesn't feel like a webinar.",
    summary:
      "A three-angle long-form series — synced, trimmed for pace, chaptered for reach.",
    narrative: [
      "Long form is where most brand video gets boring. We cut Vireo's founder series like a documentary: three angles synced, and an edit that trims the air out of a conversation without making it feel rushed.",
      "Each episode was chaptered and clipped into short-form pulls, so a single recording day produced a month of distribution.",
    ],
    role: ["Multicam edit", "Colour grade", "Sound mix", "Clip strategy"],
    deliverables: ["4× episodes", "24× short pulls", "Chapter markers"],
    frames: 4,
    tone: 200,
  },
  {
    slug: "concrete-poem",
    index: "05",
    title: "Concrete Poem",
    client: "Béton Brut",
    category: "Brand Film",
    year: "2024",
    length: "02:14",
    tagline: "Architecture, cut at the speed of light moving across it.",
    summary:
      "A studio film for an architecture practice — slow motion, hard geometry, no narration.",
    narrative: [
      "Béton Brut make buildings out of raw concrete and daylight, so we made a film out of the same two things. No voiceover — just structure, shadow, and the sound of a space.",
      "The cut traces edges the eye would otherwise miss, turning a building tour into something closer to a portrait.",
    ],
    role: ["Edit", "Colour grade", "Sound design"],
    deliverables: ["2m film", "60s cut", "Loop for exhibitions"],
    frames: 4,
    tone: 30,
  },
  {
    slug: "signal",
    index: "06",
    title: "Signal",
    client: "Halden",
    category: "Advertising",
    year: "2023",
    length: "00:45",
    tagline: "One product, one light source, one idea.",
    summary:
      "A launch spot for a watchmaker — macro detail, tactile sound, zero clutter.",
    narrative: [
      "For a watch, the story is in the detail — so the cut stays almost entirely in macro, letting the mechanism carry the film. A single moving light does the rest.",
      "Sound design was built from the object itself: the click of a crown, the sweep of a hand. No music until the last five seconds.",
    ],
    role: ["Edit", "Sound design", "Colour grade"],
    deliverables: ["45s spot", "Product loops", "Detail stills"],
    frames: 3,
    tone: 12,
  },
  {
    slug: "grain-and-gold",
    index: "07",
    title: "Grain & Gold",
    client: "Orfèvre",
    category: "Social & Reels",
    year: "2025",
    length: "00:15",
    tagline: "A jewellery drop, cut for the vertical scroll.",
    summary:
      "A 9:16 reel series for a jeweller — macro glints, hard cuts, framed thumb-first.",
    narrative: [
      "Fifteen seconds, cut vertically from the first assembly so nothing had to be cropped later. The hook is the light catching gold in the opening beat.",
    ],
    role: ["Edit", "Colour grade", "Sound", "Format kit"],
    deliverables: ["4× vertical reels", "Cover frames"],
    frames: 3,
    tone: 34,
    vertical: true,
  },
  {
    slug: "midnight-menu",
    index: "08",
    title: "Midnight Menu",
    client: "Café Vesper",
    category: "Social & Reels",
    year: "2025",
    length: "00:18",
    tagline: "A late-night bistro, one reel at a time.",
    summary:
      "A vertical social series for a restaurant — steam, candlelight and quick hands, cut to a slow beat.",
    narrative: [
      "A monthly reel format built to make a small room feel like the place to be at midnight. Cut vertical, graded warm, paced to leave you hungry.",
    ],
    role: ["Edit", "Colour grade", "Sound"],
    deliverables: ["Monthly reels", "Story cutdowns"],
    frames: 3,
    tone: 22,
    vertical: true,
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function adjacentWork(slug: string): Work {
  const i = works.findIndex((w) => w.slug === slug);
  return works[(i + 1) % works.length];
}
