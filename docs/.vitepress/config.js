// @ts-check

const head = [
  ['style', {}, 'img { border-radius: 10px }' + 'h1.title { margin-left: 0.5em }'],
]

if (process.env.NODE_ENV === 'production') {
  head.push(['script', { src: 'https://unpkg.com/thesemetrics@latest', async: '' }])
}

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Vite ⚡ Rails',
  description: 'Bringing joy to your frontend experience',
  head,
  themeConfig: {
    algolia: {
      appId: 'GERZE019PN',
      apiKey: 'cdb4a3df8ecf73fadf6bde873fc1b0d2',
      indexName: 'vite_rails',
    },
    repo: 'ElMassimo/vite_rails',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      { text: 'Vite', link: 'https://vitejs.dev/' },
      {
        text: 'Changelog',
        link: 'https://github.com/ElMassimo/vite_rails/blob/main/CHANGELOG.md',
      },
    ],

    sidebar: {
      '/config/': 'auto',
      // catch-all fallback
      '/': [
        {
          text: 'Guide',
          children: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Development', link: '/guide/development' },
            { text: 'Deployment', link: '/guide/deployment' },
            { text: 'Migration', link: '/guide/migration' },
          ],
        },
      ],
    },
  },
}
