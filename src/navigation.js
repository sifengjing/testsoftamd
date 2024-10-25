import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { config } from './config';

const siteName = config.site.name;
const homePageUrl = config.site.site;
const currentYear = new Date().getFullYear();
export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Support',
      links: [
      {
        text: 'Contact Us',
        href: getPermalink('/contact'),
      },
      {
        text: 'Disclaimer',
        href: getPermalink('/disclaimer'),
      },
      {
        text: 'Privacy Policy',
        href: getPermalink('/privacy'),
      },
    ],
  },
    {
      text: 'About Us',
      href: '/about/',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Tag Page', href: getPermalink('astro', 'tag') },
        { text: 'Category Page', href: getPermalink('tutorials', 'category') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Disclaimer', href: '/disclaimer' },
        { text: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Copyright  ©${currentYear} Made by <a class="text-blue-600 underline dark:text-muted" href="${homePageUrl}"> ${siteName}</a>. All rights reserved.
    <br><br><p class="italic  ">All software downloads provided on ${siteName} site are intended for educational and personal use only. Commercial use is strictly prohibited, and we do not take responsibility for any issues arising from unauthorized commercial usage of these downloads. Please ensure compliance with all applicable software licenses and terms.</p>
  `,
};