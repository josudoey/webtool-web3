import { uniqueId } from 'lodash'
import MethodCard from './method-card/index.mjs'
import erc20Abi from './erc20-abi.mjs'

import { render, staticRenderFns } from './render.pug'

const PreserveKey = 'abi-card'
const preservePropNames = [
  'abiRaw'
]
export default {
  render,
  staticRenderFns,
  components: {
    MethodCard
  },
  inject: ['preserveRestore', 'preserveWatch'],
  data () {
    return {
      abiRaw: '[]',
      abi: [],
      inputs: [],
      encodeResult: ''
    }
  },
  mounted () {
    const { preserveRestore, preserveWatch, $data } = this
    preserveRestore(PreserveKey, $data)
    preserveWatch(PreserveKey, this, preservePropNames)
  },
  methods: {
    uniqueId,
    setErc20Abi () {
      this.abiRaw = JSON.stringify(erc20Abi)
    },
    parse () {
      const { abiRaw } = this
      try {
        this.abi = JSON.parse(abiRaw)
      } catch (err) {
        this.$bvToast.toast(err.message, {
          variant: 'danger',
          title: '執行失敗',
          autoHideDelay: 3000,
          appendToast: true
        })
        throw err
      }
    }
  }
}
