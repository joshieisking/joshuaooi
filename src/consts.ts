import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Joshua Ooi",
  EMAIL: "joshua@joshuaooi.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal site of Joshua Ooi, Director of Solution Advisory at Dayforce.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Background and current work of Joshua Ooi in enterprise pre-sales and AI.",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Writing by Joshua Ooi on AI, enterprise sales, and building small things.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of side projects and experiments by Joshua Ooi.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/joshieisking"
  },
];
