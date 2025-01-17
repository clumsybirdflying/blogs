// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import AlgorithmLevel from "../../components/algorithmLevel.vue";
import Stackblitz from "../../components/stackblitz.vue";
import Rank from "../../components/rank.vue";
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('AlgorithmLevel',AlgorithmLevel)
    app.component('Stackblitz',Stackblitz)
    app.component('Rank',Rank)

  }
}
