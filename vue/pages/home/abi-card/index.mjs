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
  filters: {
  },
  methods: {
    uniqueId,
    setErc20Abi () {
      this.abiRaw = JSON.stringify(erc20Abi)
    },
    parse () {
      const { abiRaw } = this
      this.abi = JSON.parse(abiRaw)
    }
  }
}
