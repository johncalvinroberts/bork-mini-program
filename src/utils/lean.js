import AV from 'leancloud-storage/dist/av-weapp-min'
import { appId, appKey } from '@/secret_keys'

class Lean {
  constructor () {
    AV.init({
      appId: appId,
      appKey: appKey
    })
    Object.keys(AV).map(key => {
      this[key] = AV[key]
    })
  }
}

export default new Lean()
