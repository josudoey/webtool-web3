import MetamaskCard from './metamask-card/index.mjs'
import { render, staticRenderFns } from './render.pug'

export default {
  render,
  staticRenderFns,
  components: {
    MetamaskCard
  },
  provide () {
    const ctx = {}
    Object.defineProperties(ctx, {
      ethereum: {
        get () {
          return window.ethereum
        }
      }
    })
    return ctx
  },
  data () {
    return {
      ethereum: null
    }
  },
  mounted () {
    // see https://web3js.readthedocs.io/en/v1.5.2/getting-started.html#adding-web3-js
    this.ethereum = window.ethereum
  },
  updated () {
  },
  methods: {

  }
}
