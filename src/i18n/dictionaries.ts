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
    studio: "Studio",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    location: "Andorra · 42.5°N",
    home: "The Virtuose home",
    primary: "Primary",
  },
  preloader: {
    tagline: "Your Video Production Partner",
  },
  hero: {
    eyebrow: "French Made · Andorra",
    since: "Est. Reel 2021",
    lines: ["Video that makes", "brands look", "inevitable."],
    cta: "Watch the reel",
    lede: "An external video editing partner for brands that would rather be felt than scrolled past.",
    scroll: "Scroll",
  },
  manifesto: {
    eyebrow: "The premise",
    statement:
      "We don't fill feeds. We build attention — films cut to hold a room, earn a second watch, and make a brand impossible to scroll past.",
    emphasis: ["build", "attention", "impossible", "scroll"],
  },
  services: {
    eyebrow: "What I cut · 04 channels",
    title: "Built for every runtime.",
    items: [
      {
        title: "Advertising",
        runtime: "00:06 – 00:60",
        line: "Spots that earn a second watch.",
        body: "Broadcast and online films cut from your footage around a single idea — engineered to perform in the feed and hold up on a big screen.",
      },
      {
        title: "Social & Reels",
        runtime: "00:07 – 00:30",
        line: "Vertical-native, hook-first.",
        body: "Thumb-stopping short form designed for the platform, not squeezed into it. Delivered as repeatable systems, not one-offs.",
      },
      {
        title: "Brand Films",
        runtime: "01:00 – 03:00",
        line: "The film that becomes the brand.",
        body: "Cinematic pieces that give a company a face and a feeling — the anchor asset everything else references.",
      },
      {
        title: "Long Form & Podcast",
        runtime: "20:00 +",
        line: "Depth, cut for reach.",
        body: "Multicam series and founder conversations, synced and edited for pace, then sliced into a month of short-form pulls from a single recording day.",
      },
    ],
  },
  about: {
    eyebrow: "The studio",
    title: "Successful collaborations are built on clear communication.",
    intro: "Hi, I'm Alec.",
    paragraphs: [
      "I'm a French video editor now based in Andorra, with 5+ years of experience creating content that helps brands and agencies grow.",
      "Throughout my career, I've worked with agencies and SaaS companies across a wide range of formats, from performance ads and organic short-form content to podcasts, talking-head videos and social media campaigns. Over time, I naturally specialized in performance-focused creative, where every second of a video has a purpose.",
      "Today, my focus is on building long-term partnerships with agencies and brands. I enjoy becoming a seamless extension of a creative team, helping scale video production with consistency, reliability, and a deep understanding of each client's creative standards.",
      "I believe the best partnerships are built on trust, clear communication, and a shared commitment to producing great work. If that sounds like the way you like to work too, I'd love to hear from you.",
    ],
    plate: "A. ŽIGIĆ — VIDEO EDITOR",
    portraitLabel: "Alec Žigić · Founder",
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "5,000+", label: "Videos delivered" },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    lines: ["Let's", "roll."],
    lede: "Tell me what you're making and when it needs to land. I reply to every serious brief within one working day.",
    cta: "Start a project",
    subject: "New project — The Virtuose",
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
    lede: "Ads, social, brand films and long-form — a glimpse of the work delivered to clients.",
    filterAria: "Filter by format",
    filters: {
      all: "All",
      advertising: "Advertising",
      social: "Social & Reels",
      brand: "Brand Films",
      longform: "Long Form",
    },
    /** Keyed by the exact Sanity category value, so the badge on each card and
     *  in the lightbox is translated too. */
    categories: {
      Advertising: "Advertising",
      "Social & Reels": "Social & Reels",
      "Brand Film": "Brand Film",
      "Long Form": "Long Form",
    },
    projects: "projects",
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
      "A boutique video editing studio. French Made, based in Andorra. Ads, social, brand films and long-form — cut, coloured and finished for brands that want to look inevitable.",
    workTitle: "Work",
    workDescription:
      "Selected work from The Virtuose — advertising, social, brand films and long-form video, cut and finished for brands across Europe and beyond.",
  },
  skip: "Skip to content",
};

/** French. Same shape as `en` — TypeScript enforces it below. */
const fr: typeof en = {
  nav: {
    work: "Projets",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    location: "Andorre · 42,5°N",
    home: "Accueil The Virtuose",
    primary: "Principale",
  },
  preloader: {
    tagline: "Your Video Production Partner",
  },
  hero: {
    eyebrow: "French Made · Andorre",
    since: "Depuis 2021",
    lines: ["Des vidéos qui rendent", "une marque", "incontournable."],
    cta: "Voir le showreel",
    lede: "Un partenaire de montage vidéo externe, pour les marques qui préfèrent marquer les esprits que défiler dans un fil.",
    scroll: "Défiler",
  },
  manifesto: {
    eyebrow: "Le principe",
    statement:
      "On ne remplit pas des fils d'actualité. On construit de l'attention — des films montés pour tenir une salle, mériter un second visionnage, et rendre une marque impossible à ignorer.",
    emphasis: ["construit", "attention", "impossible", "ignorer."],
  },
  services: {
    eyebrow: "Ce que je monte · 04 formats",
    title: "Pensé pour chaque durée.",
    items: [
      {
        title: "Publicité",
        runtime: "00:06 – 00:60",
        line: "Des spots qui méritent un second visionnage.",
        body: "Des films TV et web montés à partir de vos rushes autour d'une seule idée — calibrés pour performer dans le fil et tenir sur grand écran.",
      },
      {
        title: "Social & Reels",
        runtime: "00:07 – 00:30",
        line: "Pensé vertical, accroche en premier.",
        body: "Du format court conçu pour la plateforme, pas comprimé dedans. Livré comme un système réutilisable, pas comme un coup unique.",
      },
      {
        title: "Films de marque",
        runtime: "01:00 – 03:00",
        line: "Le film qui devient la marque.",
        body: "Des pièces cinématographiques qui donnent un visage et une émotion à une entreprise — l'actif central auquel tout le reste se réfère.",
      },
      {
        title: "Format long & Podcast",
        runtime: "20:00 +",
        line: "De la profondeur, montée pour la portée.",
        body: "Séries multicaméra et conversations de fondateurs, synchronisées et montées pour le rythme, puis découpées en un mois de formats courts à partir d'une seule journée d'enregistrement.",
      },
    ],
  },
  about: {
    eyebrow: "Le studio",
    title: "Les collaborations réussies reposent sur une communication claire.",
    intro: "Bonjour, je suis Alec.",
    paragraphs: [
      "Je suis un monteur vidéo français, désormais basé en Andorre, avec plus de 5 ans d'expérience dans la création de contenus qui aident les marques et les agences à se développer.",
      "Au fil de mon parcours, j'ai travaillé avec des agences et des entreprises SaaS sur une grande variété de formats : publicités à la performance, contenus courts organiques, podcasts, vidéos face caméra et campagnes pour les réseaux sociaux. Je me suis naturellement spécialisé dans le créatif orienté performance, où chaque seconde d'une vidéo a une raison d'être.",
      "Aujourd'hui, je me concentre sur des partenariats de long terme avec des agences et des marques. J'aime devenir le prolongement naturel d'une équipe créative et aider à faire passer la production vidéo à l'échelle, avec constance, fiabilité et une vraie compréhension des exigences créatives de chaque client.",
      "Je crois que les meilleurs partenariats reposent sur la confiance, une communication claire et une même exigence du travail bien fait. Si c'est aussi votre façon de travailler, écrivez-moi.",
    ],
    plate: "A. ŽIGIĆ — MONTEUR VIDÉO",
    portraitLabel: "Alec Žigić · Fondateur",
    stats: [
      { value: "5+", label: "Années d'expérience" },
      { value: "5 000+", label: "Vidéos livrées" },
    ],
  },
  contact: {
    eyebrow: "Prendre contact",
    lines: ["On", "y va."],
    lede: "Dites-moi ce que vous préparez et pour quand. Je réponds à tout brief sérieux sous un jour ouvré.",
    cta: "Démarrer un projet",
    subject: "Nouveau projet — The Virtuose",
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
    lede: "Publicité, social, films de marque et format long — un aperçu des réalisations livrées aux clients.",
    filterAria: "Filtrer par format",
    filters: {
      all: "Tous",
      advertising: "Publicité",
      social: "Social & Reels",
      brand: "Films de marque",
      longform: "Format long",
    },
    categories: {
      Advertising: "Publicité",
      "Social & Reels": "Social & Reels",
      "Brand Film": "Film de marque",
      "Long Form": "Format long",
    },
    projects: "projets",
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
      "Studio de montage vidéo. French Made, basé en Andorre. Publicité, social, films de marque et format long — montés, étalonnés et finalisés pour les marques qui veulent marquer.",
    workTitle: "Projets",
    workDescription:
      "Les projets de The Virtuose — publicité, social, films de marque et format long, montés et finalisés pour des marques en Europe et au-delà.",
  },
  skip: "Aller au contenu",
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
