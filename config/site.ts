export type SiteConfig = typeof siteConfig;
export const socialLinks = {
  twitter: 'https://twitter.com/itsvanture',
  github: 'https://github.com/timtwiest',
  linkedin: 'https://www.linkedin.com/in/timtwiest/',
};

export const siteConfig = {
  name: 'Tim Twiest',
  description: "Tim's personal website",
  links: {
    ...socialLinks,
  },
};
