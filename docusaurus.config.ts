import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Catalyst Docs",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.catalystmonitor.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "billliu1992", // Usually your GitHub org/user name.
  projectName: "catalyst-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",

          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            */
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        */
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Catalyst Docs",
      logo: {
        alt: "Logo for Catalyst",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://www.catalystmonitor.com",
          position: "left",
          label: "Home",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://app.catalystmonitor.com",
          position: "left",
          label: "Dashboard",
        },
        /* { to: "/blog", label: "Blog", position: "left" }, */
        {
          href: "https://github.com/catalyst-monitor",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Home",
              to: "https://www.catalystmonitor.com",
            },
            {
              label: "Documentation",
              to: "/",
            },
            {
              label: "Dashboard",
              to: "https://app.catalystmonitor.com",
            },
          ],
        },
        /*
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        */
        {
          title: "More",
          items: [
            /*
            {
              label: "Blog",
              to: "/blog",
            },
            */
            {
              label: "GitHub",
              href: "https://github.com/catalyst-monitor",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Privium, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
