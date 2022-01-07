import { render, staticRenderFns } from './render.pug'
import { uniqueId } from 'lodash'
import { defaultAbiCoder as abiCoder, FunctionFragment, toUtf8Bytes, keccak256 } from 'ethers/lib/utils.js'
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
  },
  methods: {
    uniqueId,
    methodPlaceholderDisplay (method) {
      return `${method.name} (${method.type})`
    },
    encode () {
      const { method, values } = this
      const fragment = FunctionFragment.from(method)
      // see https://www.4byte.directory/
      const signatures = keccak256(toUtf8Bytes(fragment.format())).slice(0, 10)
      const encodedParams = abiCoder.encode(method.inputs, values).slice(2)
      this.encodeResult = `${signatures}${encodedParams}`
    },
    decode () {
      const { method, returnData } = this
      const types = method.outputs.map(function (output) {
        return output.type
      })
      this.decodeResult = abiCoder.decode(types, returnData)
    }
  }
}
