/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'authorizer',
  tagline: `The scalable, flexible, and fast permission and access-management platform.`,
  url: 'https://authorizer-tech.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'authorizer-tech',
  projectName: 'authorizer-tech.github.io',
  themeConfig: {
    colorMode: {
      switchConfig: {
        darkIcon: '🌙',
      }
    },
    navbar: {
      title: 'authorizer.tech',
      logo: {
        alt: 'site-logo',
        src: 'img/authorizer.png'
      },
      items: [
        // {
        //   to: "api/",
        //   activeBasePath: "api",
        //   label: "API",
        //   position: "left",
        // },
        {
          type: 'doc',
          docId: 'overview/introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right' 
        },
        {
          href: 'https://github.com/authorizer-tech',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs/overview/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
           {
              label: 'Slack',
              href: 'https://authorizer-tech.slack.com',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/authorizer-tech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/authorizer-tech/authorizer-web/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/authorizer-tech/authorizer-web/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
