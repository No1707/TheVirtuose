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
    eyebrow: "What we cut · 04 channels",
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
  marquee: {
    label: "Trusted by brands who sweat the details",
    aria: "Selected clients",
  },
  about: {
    eyebrow: "The studio",
    title: "One editor's obsession, scaled into a studio.",
    body1:
      "The Virtuose is a boutique video editing studio founded by Alec Žigić — French made, based in Andorra, working with brands across Europe and beyond. We keep it deliberately small: you talk to the editor who actually cuts your film, not an account manager.",
    body2:
      "No account layers, no handoffs, no house style forced onto your brand. Just a tight creative loop and an editor's eye for the two frames that make a film land.",
    plate: "A. ŽIGIĆ — EDITOR / COLOURIST",
    portraitLabel: "Alec Žigić · Founder",
  },
  process: {
    eyebrow: "How it runs · 04 steps",
    title: "From footage to master, without the agency drag.",
    aria: "Process",
    steps: [
      {
        t: "Brief & footage",
        d: "You send the rushes and what the film has to do. One conversation to agree the angle, the length and the deadline.",
      },
      {
        t: "Assembly",
        d: "Structure first: selects, story order, pacing. You see a rough cut early, before any polish goes in.",
      },
      {
        t: "Edit & colour",
        d: "Where the film is actually made. Rhythm, sound design, colour and titles, refined over a tight round of notes.",
      },
      {
        t: "Deliver",
        d: "Every cut and every aspect ratio your channels need, mastered and handed over on schedule.",
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    lines: ["Let's", "roll."],
    lede: "Tell us what you're making and when it needs to land. We reply to every serious brief within one working day.",
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
    eyebrow: "Selected work · The reel",
    title: "The work, in full.",
    lede: "Ads, social, brand films and long-form — a cross-section of what we cut, colour and finish for brands across Europe and beyond.",
    filterAria: "Filter by format",
    filters: {
      all: "All",
      advertising: "Advertising",
      social: "Social & Reels",
      brand: "Brand Films",
      longform: "Long Form",
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
    eyebrow: "Ce qu'on monte · 04 formats",
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
  marquee: {
    label: "La confiance de marques exigeantes sur le détail",
    aria: "Clients sélectionnés",
  },
  about: {
    eyebrow: "Le studio",
    title: "L'obsession d'un monteur, devenue un studio.",
    body1:
      "The Virtuose est un studio de montage vidéo fondé par Alec Žigić — French made, basé en Andorre, au service de marques en Europe et au-delà. La structure reste volontairement réduite : vous parlez au monteur qui monte réellement votre film, pas à un chargé de clientèle.",
    body2:
      "Aucune strate intermédiaire, aucun passage de relais, aucun style maison imposé à votre marque. Juste une boucle créative courte et l'œil d'un monteur pour les deux images qui font basculer un film.",
    plate: "A. ŽIGIĆ — MONTEUR / ÉTALONNEUR",
    portraitLabel: "Alec Žigić · Fondateur",
  },
  process: {
    eyebrow: "Le déroulé · 04 étapes",
    title: "Des rushes au master, sans la lourdeur d'une agence.",
    aria: "Processus",
    steps: [
      {
        t: "Brief & rushes",
        d: "Vous envoyez les rushes et l'objectif du film. Une conversation pour fixer l'angle, la durée et l'échéance.",
      },
      {
        t: "Assemblage",
        d: "La structure d'abord : sélection, ordre du récit, rythme. Vous voyez un bout-à-bout tôt, avant tout travail de finition.",
      },
      {
        t: "Montage & étalonnage",
        d: "C'est là que le film se fait vraiment. Rythme, sound design, couleur et titrages, affinés en un aller-retour serré.",
      },
      {
        t: "Livraison",
        d: "Tous les montages et tous les formats dont vos canaux ont besoin, masterisés et livrés dans les délais.",
      },
    ],
  },
  contact: {
    eyebrow: "Prendre contact",
    lines: ["On", "y va."],
    lede: "Dites-nous ce que vous préparez et pour quand. Nous répondons à tout brief sérieux sous un jour ouvré.",
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
    eyebrow: "Projets sélectionnés · Le reel",
    title: "Tous les projets.",
    lede: "Publicité, social, films de marque et format long — un aperçu de ce que nous montons, étalonnons et finalisons pour des marques en Europe et au-delà.",
    filterAria: "Filtrer par format",
    filters: {
      all: "Tous",
      advertising: "Publicité",
      social: "Social & Reels",
      brand: "Films de marque",
      longform: "Format long",
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
