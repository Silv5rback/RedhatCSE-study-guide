// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RedhatCSE — Red Hat Certified Systems Engineer Study Guide',
  tagline: 'Interactive RHCSA → RHCE study guide with live shell labs, quizzes, and React widgets',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://silv5rback.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/RedhatCSE-study-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Silv5rback', // Usually your GitHub org/user name.
  projectName: 'RedhatCSE-study-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/clientModules/asciinema.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Silv5rback/RedhatCSE-study-guide/tree/main/',
          routeBasePath: '/', // Serve docs at root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RedhatCSE',
        logo: {
          alt: 'RedhatCSE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Study Guide',
          },
          {
            href: 'https://github.com/Silv5rback/RedhatCSE-study-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Study Guide',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Silv5rback/RedhatCSE-study-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RedhatCSE Study Guide. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['bash', 'powershell', 'yaml', 'ini', 'toml'],
      },
    }),
};

module.exports = config;
