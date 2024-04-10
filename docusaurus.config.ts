import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Catalyst",
  tagline: "Monitoring for high velocity teams.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.catalystmonitor.com",
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
          routeBasePath: "/docs",

          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            */
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-GK71X3C7PS",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Catalyst",
      logo: {
        alt: "Logo for Catalyst",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          label: "Pricing",
          to: "pricing",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          "aria-label": "Join our Discord",
          href: "https://discord.gg/YQZy4SXzmX",
          position: "right",
          className: "navbar--discord-link",
        },
        {
          "aria-label": "Find us on GitHub",
          href: "https://github.com/catalyst-monitor",
          position: "right",
          className: "navbar--github-link",
        },
        {
          href: "https://app.catalystmonitor.com",
          position: "right",
          label: "Sign Up",
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
              to: "/",
            },
            {
              label: "Documentation",
              to: "/docs",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Pricing",
              to: "/pricing",
            },
            {
              label: "Sign Up",
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
            {
              label: "Talk to us!",
              href: "https://calendly.com/chat-bill-liu/catalyst-intro",
            },
            {
              label: "Play with a live demo",
              href: "https://app.catalystmonitor.com/o/9c5f882c-fb76-4583-97d6-6c83eb382faf",
            },
            {
              label: "GitHub",
              href: "https://github.com/catalyst-monitor",
            },
            {
              label: "Discord",
              href: "https://discord.gg/YQZy4SXzmX",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/catalystmonitor/",
            },
            {
              label: "Newsletter",
              href: "https://cdn.forms-content.sg-form.com/b8ee284e-7912-11ee-be05-767cd0f2f8cc",
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
