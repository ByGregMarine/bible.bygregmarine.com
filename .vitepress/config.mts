import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bible Resources by Greg Marine",
  description: "Bible related resources authored by Greg Marine",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Last updated'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'His Story Bible', link: '/hsb' }
    ],

    sidebar: [
      {
        text: 'Bibles',
        items: [
          { text: 'His Story Bible', link: '/hsb' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ByGregMarine/bible.bygregmarine.com' }
    ]
  }
})
