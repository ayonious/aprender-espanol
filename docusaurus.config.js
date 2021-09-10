module.exports = {
  title: "Aprender espanōl", // Title for your website.
  tagline: "Collection of my interview questions for interview",
  url: "https://spanish-notes.netlify.app", // Your website URL
  baseUrl: "/", // Base URL for your project */

  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "support",
      content:
        '⭐️ If you like this Spanish Learning website, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayonious/spanish-notes">GitHub</a>! ⭐️',
    },
    navbar: {
      title: "Aprender espanōl",
      logo: {
        alt: "CTP",
        src: "img/favicon.ico",
      },
      items: [
        {
          href: "https://github.com/ayonious/spanish-notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Frases",
          items: [
            {
              label: "Words",
              to: "docs/Words",
            },
            {
              label: "Who/What",
              to: "docs/QueQuien",
            },
            {
              label: "Numbers",
              to: "docs/Numbers",
            },
          ],
        },
        {
          title: "Tense",
          items: [
            {
              label: "Past",
              to: "docs/Past",
            },
            {
              label: "Present Perfect",
              to: "docs/PresentPerfect",
            },
            {
              label: "Future",
              to: "docs/Futur",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Since/For",
              to: "docs/HaceDesde",
            },
            {
              label: "Asking/Ordering",
              to: "docs/Imperativ",
            },
            {
              label: "Continuous(Doing Now)",
              to: "docs/Gerundio",
            },
            {
              label: "Comparison",
              to: "docs/Comparison",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nahiyan Kamal. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // this enabled the edit button for documentation
          editUrl: "https://github.com/ayonious/spanish-notes/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
