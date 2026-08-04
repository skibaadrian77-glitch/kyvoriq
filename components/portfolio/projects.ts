export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
  href: string;
  isOffline?: boolean;
};

export const projects: PortfolioProject[] = [
  {
    slug: "carokot-joga",
    number: "01",
    title: "Carokot Joga",
    category: "Wellness",
    description:
      "Editorialowa strona instruktorki jogi, łącząca spokojny charakter marki z ofertą zajęć, materiałami wideo, galerią oraz zapisami online.",
    services: ["Brand Direction", "UX/UI", "Development"],
    image: "/projects/carokot-joga.jpg",
    imageAlt: "Projekt strony internetowej Carokot Joga",
    href: "/projekty/carokot-joga",
    isOffline: true,
  },
];