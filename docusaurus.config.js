module.exports = {
  title: "Source Pocket",
  tagline: "Your source pocket for development",
  url: "https://sourcepocket.netlify.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sdtrdev",
  projectName: "source-pocket",
  themeConfig: {
    navbar: {
      title: "Source Pocket",
      logo: {
        alt: "Source Pocket Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/sdtrdev/source-pocket",
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
              label: "Front-End Pocket",
              to: "docs/",
            },
            {
              label: "Style Guide",
              to: "docs/doc1",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/software-development-turkey",
            },
            {
              label: "Discord",
              href: "https://discord.gg/J3PTmeFj6s",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/sdtrdev",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/sdtrdev/source-pocket",
            },
            {
              label:
                "Made with 💜 by the members of Software Development Turkey",
              href: "https://discord.gg/J3PTmeFj6s",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SourcePocket, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/sdtrdev/source-pocket/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
