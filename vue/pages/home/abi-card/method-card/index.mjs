import { render, staticRenderFns } from './render.pug'
import ABI from 'ethjs-abi'
import buffer from 'buffer'
import { uniqueId } from 'lodash'
const Buffer = buffer.Buffer
export default {
  render,
  staticRenderFns,
  props: ['method'],
  data () {
    const { name, inputs } = this.method
    return {
      name,
      inputs: inputs.slice(),
      values: inputs.map(function () { return '' }),
      encodeResult: '',
      returnData: '',
      decodeResult: ''
    }
  },
  mounted () {
    // for ethjs-abi Buffer
    window.Buffer = Buffer
  },
  methods: {
    uniqueId,
    methodPlaceholderDisplay (method) {
      return `${method.name} (${method.type})`
    },
    encode () {
      const { method, values } = this
      this.encodeResult = ABI.encodeMethod(method, values)
    },
    decode () {
      const { method, returnData } = this
      this.decodeResult = ABI.decodeMethod(method, returnData)
    }
  }
}
