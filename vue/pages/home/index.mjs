import pick from 'lodash'
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
    const preserveSave = function (key, state) {
      const preservation = JSON.stringify(state)
      window.localStorage.setItem(key, preservation)
    }
    const preserveRestore = function (key, data) {
      const preservation = window.localStorage.getItem(key)
      Object.assign(data, JSON.parse(preservation))
    }
    const preserveData = function (key, vm, names) {
      const { $data } = vm
      preserveSave(key, pick($data, names))
    }
    const preserveWatch = function (key, vm, names) {
      for (const name of names) {
        vm.$watch(name, function () {
          preserveData(key, vm, names)
        })
      }
    }

    const ctx = {
      preserveRestore, preserveWatch
    }
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
