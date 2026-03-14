import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'home', href: getPermalink('/') },
    { text: 'photos', href: '/#photos' },
    { text: 'projects', href: '/#projects' },
    { text: 'link', href: '/#work' },
    { text: 'pricerx', href: getPermalink('/pricerx') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/justinmilligan34' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/justin_m34' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/justin_m34' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `Justin Milligan · ${new Date().getFullYear()}`,
};
