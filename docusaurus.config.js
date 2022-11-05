// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jvavav',
  tagline: '',
  url: 'https://jvavav.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jvavav', // Usually your GitHub org/user name.
  projectName: 'jvavav.com', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jvavav/jvavav.com/tree/main/',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Jvavav',
        logo: {
          alt: 'Jvavav',
          src: 'img/icon.png',
        },
      },
      //   items: [
      //     {
      //       type: 'doc',
      //       docId: 'intro',
      //       position: 'left',
      //       label: 'Tutorial',
      //     },
      //     {
      //       to: '/blog',
      //       label: 'Blog',
      //       position: 'left'
      //     },
      //     {
      //       href: 'https://github.com/facebook/docusaurus',
      //       label: 'GitHub',
      //       position: 'right',
      //     },
      //   ],
      // },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Tencent QQ',
      //           href: 'https://qm.qq.com/cgi-bin/qm/qr?k=8zvfc5mqwM4g1XLFf44BL3cOgzEDxe4e&jump_from=webapi&authKey=ZEp32iDjUBstm2Y3kDhP2EtTX/VUTY4q0KEpfiNqbstJb0RStnbs/cp6FJ0XbSA4',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         // {
      //         //   label: 'GitHub',
      //         //   href: 'https://github.com/jvavav/',
      //         // },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Jvavav`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
