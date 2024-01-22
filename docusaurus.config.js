// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Promptly",
  tagline: "AI Agents in Minutes | No-code AI App Builder",
  favicon: "img/llmstack-icon.png",

  // Set the production url of your site here
  url: "https://docs.trypromptly.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "trypromptly", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-TLRMGD84GD",
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image:
        "https://storage.googleapis.com/trypromptly-static/static/images/opengraph.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "Promptly Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/trypromptly/LLMStack",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Promptly UI",
                to: "/getting-started/ui",
              },
              {
                label: "Processors",
                to: "/processors/introduction",
              },
              {
                label: "Apps",
                to: "/apps/introduction",
              },
              {
                label: "Datasources",
                to: "/datasources/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/3JsEzSXspJ",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/company/trypromptly",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/trypromptly",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://blog.trypromptly.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/trypromptly/llmstack",
              },
              {
                label: "LLMStack",
                href: "https://llmstack.trypromptly.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MakerDojo, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["javascript", "python"],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      scripts: [
        {
          src: "https://buttons.github.io/buttons.js",
          async: true,
          defer: true,
        },
      ],
    }),
};

export default config;
