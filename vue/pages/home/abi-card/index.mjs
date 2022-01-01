import { uniqueId } from 'lodash'
import MethodCard from './method-card/index.mjs'

import { render, staticRenderFns } from './render.pug'

export default {
  render,
  staticRenderFns,
  components: {
    MethodCard
  },
  data () {
    return {
      abiRaw: '[]',
      abi: [],
      inputs: [],
      encodeResult: ''
    }
  },
  async mounted () {
  },
  updated () {
  },
  filters: {
  },
  methods: {
    uniqueId,
    parse () {
      const { abiRaw } = this
      this.abi = JSON.parse(abiRaw)
    }
  }
}
