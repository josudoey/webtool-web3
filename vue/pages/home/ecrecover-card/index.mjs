import { toChecksumAddress, personalRecover } from '../utils.mjs'

import { render, staticRenderFns } from './render.pug'

export default {
  render,
  staticRenderFns,
  data () {
    return {
      recoverMessage: '',
      recoverSignature: '',
      recoverAddress: ''
    }
  },
  async mounted () {
  },
  updated () {
  },
  filters: {
    toChecksumAddress
  },
  methods: {
    async personalRecover (message, signature) {
      this.recoverAddress = personalRecover(message, signature)
    }
  }
}
