import MetamaskCard from './metamask-card/index.mjs'
import EcrecoverCard from './ecrecover-card/index.mjs'
import AbiCard from './abi-card/index.mjs'
import { render, staticRenderFns } from './render.pug'

export default {
  render,
  staticRenderFns,
  components: {
    MetamaskCard,
    EcrecoverCard,
    AbiCard
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
    // see https://docs.metamask.io/guide/getting-started.html#basic-considerations
    this.ethereum = window.ethereum
  },
  updated () {
  },
  methods: {

  }
}
