import { toChecksumAddress, personalRecover } from '../utils.mjs'
import { pick } from 'lodash'
import { render, staticRenderFns } from './render.pug'
const PreserveKey = 'ecrecover-card'
const preservePropNames = [
  'recoverMessage', 'recoverSignature'
]
export default {
  render,
  staticRenderFns,
  inject: ['preserveRestore', 'preserveWatch'],
  data () {
    return {
      recoverMessage: '',
      recoverSignature: '',
      recoverAddress: ''
    }
  },
  async mounted () {
    const { preserveRestore, preserveWatch, $data } = this
    preserveRestore(PreserveKey, $data)
    preserveWatch(PreserveKey, this, preservePropNames)
  },
  filters: {
    toChecksumAddress
  },
  methods: {
    preserveData () {
      const { preserveSave, $data } = this
      preserveSave(PreserveKey, pick($data, preservePropNames))
    },
    watchForPreserve () {
      const { preserveData } = this
      for (const name of preservePropNames) {
        this.$watch(name, preserveData)
      }
    },
    async personalRecover (message, signature) {
      this.recoverAddress = personalRecover(message, signature)
    }
  }
}
