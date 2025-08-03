import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aprender español',
  tagline: 'Collection of my Spanish language learning notes',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://spanish-notes.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ayonious', // Usually your GitHub org/user name.
  projectName: 'spanish-notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // this enabled the edit button for documentation
          editUrl: 'https://github.com/ayonious/spanish-notes/blob/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    announcementBar: {
      id: 'support',
      content:
        '⭐️ If you like this Spanish Learning website, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayonious/spanish-notes">GitHub</a>! ⭐️',
    },
    navbar: {
      title: 'Aprender español',
      logo: {
        alt: 'Aprender español',
        src: 'img/favicon.ico',
      },
      items: [
        {
          href: 'https://github.com/ayonious/spanish-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Frases',
          items: [
            {
              label: 'Words',
              to: 'docs/Words',
            },
            {
              label: 'Who/What',
              to: 'docs/QueQuien',
            },
            {
              label: 'Numbers',
              to: 'docs/Numbers',
            },
          ],
        },
        {
          title: 'Tense',
          items: [
            {
              label: 'Past',
              to: 'docs/Past',
            },
            {
              label: 'Present Perfect',
              to: 'docs/PresentPerfect',
            },
            {
              label: 'Future',
              to: 'docs/Futur',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Since/For',
              to: 'docs/HaceDesde',
            },
            {
              label: 'Asking/Ordering',
              to: 'docs/Imperativ',
            },
            {
              label: 'Continuous(Doing Now)',
              to: 'docs/Gerundio',
            },
            {
              label: 'Comparison',
              to: 'docs/Comparison',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nahiyan Kamal. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;