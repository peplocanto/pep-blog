// @ts-check

const title = 'Pep Locanto Blog';
const desc = 'About programming and snippets by Pep Locanto, Senior FrontEnd Dev in Madrid, Spain.';
const canonical = 'https://peplocanto.com';
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: title,
  tagline: 'Reach me at https://peplocanto.com',
  url: 'https://peplocanto.github.io',
  baseUrl: '/pep-blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'peplocanto',
  plugins: ['docusaurus-plugin-sass'],
  projectName: 'pep-blog',
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/peplocanto/pep-blog',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/peplocanto/pep-blog',
        },
        theme: {
          customCss: require.resolve('./src/styles/global.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "author", content: "Pep Locanto" },
        { name: "description", content: desc },
        { property: "og:type", content: "website" },
        { name: "og:title", property: "og:title", content: title },
        { name: "og:description", property: "og:description", content: desc },
        { property: "og:site_name", content: title },
        { property: "og:url", content: canonical },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:site", content: "@peplocanto" },
        { name: "twitter:creator", content: "@peplocanto" },
        { property: "og:image", content: "https://imgur.com/3jiviWb.png" },
        { name: "twitter:image", content: "https://imgur.com/MHqJKZw.png" },
      ],
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Snippets',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/contacts', label: 'Contacts', position: 'left' },
        ],
      },
      footer: {
        copyright: `Made with ❤ and caffeine by Pep Locanto. Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
