module.exports = {
    plugins: ['docusaurus-plugin-sass'],
    title: 'Royalix | Minecraft',
    tagline: 'A place where flash was created',
    url: 'https://honeybeedev.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Royalix', // Usually your GitHub org/user name.
    projectName: 'Royalix', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'support', // Any value that will identify this message.
            content:
                '⭐ Looking for support? Or just want to chat with us? <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/EyBkE34Wmz">Join our discord</a>',
            backgroundColor: '#fafbfc', // Defaults to `#fff`.
            textColor: '#091E42', // Defaults to `#000`.
            isCloseable: false, // Defaults to `true`.
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'dark',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '☀️',

                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
        navbar: {
            title: 'Home',
            logo: {
                alt: 'Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Wiki',
                    position: 'left',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Royalix`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
