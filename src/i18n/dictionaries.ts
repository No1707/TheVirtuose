export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * All site copy, in one place. Project content (titles, clients) stays in the
 * CMS and is deliberately not translated — those are mostly proper nouns.
 */
const en = {
  nav: {
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    location: "Andorra · 42.5°N",
    home: "The Virtuose home",
    primary: "Primary",
  },
  hero: {
    eyebrow: "French Made · Based in Andorra",
    lines: ["Your external", "video production", "partner."],
    cta: "Watch the reel",
    scroll: "Scroll",
  },
  services: {
    eyebrow: "Services",
    items: [
      {
        title: "Ads",
      },
      {
        title: "Social & Reels",
      },
      {
        title: "Corporate",
      },
      {
        title: "Long Form & Podcast",
      },
    ],
  },
  about: {
    title: "Successful collaborations are built on clear communication.",
    intro: "Hi, I'm Alec.",
    paragraphs: [
      "I'm a French video editor now based in Andorra, with 5+ years of experience creating content that helps brands and agencies grow.",
      "Throughout my career, I've worked with agencies and SaaS companies across a wide range of formats, from performance ads and organic short-form content to podcasts, talking-head videos and social media campaigns. Over time, I naturally specialized in performance-focused creative, where every second of a video has a purpose.",
      "Today, my focus is on building long-term partnerships with agencies and brands. I enjoy becoming a seamless extension of a creative team, helping scale video production with consistency, reliability, and a deep understanding of each client's creative standards.",
      "I believe the best partnerships are built on trust, clear communication, and a shared commitment to producing great work. If that sounds like the way you like to work too, I'd love to hear from you.",
    ],
    portraitLabel: "Alec Žigić · Founder",
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "5,000+", label: "Videos delivered" },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    lines: ["Let's", "roll."],
  },
  footer: {
    tagline: "Your Video Production Partner",
    index: "Index",
    elsewhere: "Elsewhere",
    email: "Email",
    legal: "French Made, based in Andorra",
    nav: "Footer",
  },
  work: {
    eyebrow: "Work · Selected cuts",
    title: "A glimpse.",
    lede: "Ads, social, corporate and long-form — a glimpse of the work delivered to clients.",
    filterAria: "Filter by format",
    filters: {
      all: "All",
      advertising: "Ads",
      social: "Social & Reels",
      brand: "Corporate",
      longform: "Long Form",
    },
    /** Keyed by the exact Sanity category value, so the badge on each card and
     *  in the lightbox is translated too. */
    categories: {
      Advertising: "Ads",
      "Social & Reels": "Social & Reels",
      "Brand Film": "Corporate",
      "Long Form": "Long Form",
    },
    ctaLabel: "Have a project in mind?",
    ctaTitle: "Let's roll.",
    play: "Play",
  },
  notFound: {
    eyebrow: "Error · 404",
    title: "Dead frame.",
    body: "This cut doesn't exist — or it never made the final edit.",
    back: "Back to top",
  },
  meta: {
    title: "The Virtuose — Your Video Production Partner",
    description:
      "A boutique video editing studio. French Made, based in Andorra. Ads, social, corporate and long-form — cut, coloured and finished for brands that want to look inevitable.",
    workTitle: "Work",
    workDescription:
      "Selected work from The Virtuose — ads, social, corporate and long-form video, cut and finished for brands across Europe and beyond.",
  },
  skip: "Skip to content",
};

/** French. Same shape as `en` — TypeScript enforces it below. */
const fr: typeof en = {
  nav: {
    work: "Projets",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    location: "Andorre · 42,5°N",
    home: "Accueil The Virtuose",
    primary: "Principale",
  },
  hero: {
    eyebrow: "French Made · Basé à Andorre",
    lines: ["Votre partenaire", "de production vidéo", "externe."],
    cta: "Voir le showreel",
    scroll: "Défiler",
  },
  services: {
    eyebrow: "Services",
    items: [
      {
        title: "Ads",
      },
      {
        title: "Social & Reels",
      },
      {
        title: "Corporate",
      },
      {
        title: "Format long & Podcast",
      },
    ],
  },
  about: {
    title: "Les collaborations réussies reposent sur une communication claire.",
    intro: "Bonjour, je suis Alec.",
    paragraphs: [
      "Je suis un monteur vidéo français, désormais basé en Andorre, avec plus de 5 ans d'expérience dans la création de contenus qui aident les marques et les agences à se développer.",
      "Au fil de mon parcours, j'ai travaillé avec des agences et des entreprises SaaS sur une grande variété de formats : publicités à la performance, contenus courts organiques, podcasts, vidéos face caméra et campagnes pour les réseaux sociaux. Je me suis naturellement spécialisé dans le créatif orienté performance, où chaque seconde d'une vidéo a une raison d'être.",
      "Aujourd'hui, je me concentre sur des partenariats de long terme avec des agences et des marques. J'aime devenir le prolongement naturel d'une équipe créative et aider à faire passer la production vidéo à l'échelle, avec constance, fiabilité et une vraie compréhension des exigences créatives de chaque client.",
      "Je crois que les meilleurs partenariats reposent sur la confiance, une communication claire et une même exigence du travail bien fait. Si c'est aussi votre façon de travailler, écrivez-moi.",
    ],
    portraitLabel: "Alec Žigić · Fondateur",
    stats: [
      { value: "5+", label: "Années d'expérience" },
      { value: "5 000+", label: "Vidéos livrées" },
    ],
  },
  contact: {
    eyebrow: "Prendre contact",
    lines: ["On", "y va."],
  },
  footer: {
    tagline: "Your Video Production Partner",
    index: "Sommaire",
    elsewhere: "Ailleurs",
    email: "E-mail",
    legal: "French Made, basé en Andorre",
    nav: "Pied de page",
  },
  work: {
    eyebrow: "Projets · Sélection",
    title: "Un aperçu.",
    lede: "Ads, social, corporate et format long — un aperçu des réalisations livrées aux clients.",
    filterAria: "Filtrer par format",
    filters: {
      all: "Tous",
      advertising: "Ads",
      social: "Social & Reels",
      brand: "Corporate",
      longform: "Format long",
    },
    categories: {
      Advertising: "Ads",
      "Social & Reels": "Social & Reels",
      "Brand Film": "Corporate",
      "Long Form": "Format long",
    },
    ctaLabel: "Un projet en tête ?",
    ctaTitle: "On y va.",
    play: "Lire",
  },
  notFound: {
    eyebrow: "Erreur · 404",
    title: "Image morte.",
    body: "Ce plan n'existe pas — ou il n'a jamais passé le montage final.",
    back: "Retour à l'accueil",
  },
  meta: {
    title: "The Virtuose — Your Video Production Partner",
    description:
      "Studio de montage vidéo. French Made, basé en Andorre. Ads, social, corporate et format long — montés, étalonnés et finalisés pour les marques qui veulent marquer.",
    workTitle: "Projets",
    workDescription:
      "Les projets de The Virtuose — ads, social, corporate et format long, montés et finalisés pour des marques en Europe et au-delà.",
  },
  skip: "Aller au contenu",
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
