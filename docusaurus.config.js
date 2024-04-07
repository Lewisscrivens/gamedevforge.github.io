
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GameDevForge',
  favicon: '/img/favicon.ico',
  url: 'https://gamedevforge.net/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'lewisscrivens',
  projectName: 'gamedevforge.github.io',
  deploymentBranch: 'deployment',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'log',

  tagline: 'A learning resource for both aspiring and professional game developers.',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GameDevForge',
        logo: {
          alt: 'Logo',
          src: 'img/ForgeIcon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modulesSidebar',
            position: 'left',
            label: 'Modules',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // Remove comment when/if youtube videos are up.
          // {
          //   href: 'https://www.youtube.com/@Shr00mDev',
          //   label: 'YouTube',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Lewis Scrivens`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'java'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'Highlight',
            block: { start: 'Highlight Start', end: 'Highlight End' },
          },
          {
            className: 'code-block-error-line',
            line: 'Error',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

    customFields: {
      WelcomeMsg: 'Welcome to the Forge!',
    },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        searchBarShortcut: false,
      }),
    ],
  ],

/*
headTags: [
  {
    tagName: "link",
    attributes: {
      rel: "preload",
      href: "static/fonts/lato/Lato-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  }
],
*/

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-B26WKDZFGC',
          anonymizeIP: true,
        },
    ]
  ],
};

export default config;