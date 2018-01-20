import Lean from '@/utils/av-weapp-min'
import { appId, appKey } from '@/secret_keys'
import wepy from 'wepy'

export default class UserModel {
  constructor () {
    Lean.init({
      appId: appId,
      appKey: appKey
    })
    this.data = {}
    this.currentUser()
  }

  currentUser () {
    const current = Lean.User.current()
    if (current) {
      this.data = current.attributes
    }
    return current
  }

  get isRegistered () {
    if (this.data.attributes) {
      return true
    }
    return false
  }

  get isRescuer () {
    if (this.data.attributes && this.data.attributes.is_rescuer) {
      return true
    }
    return false
  }

  async authorize () {
    const authData = await wepy.getSetting()
    console.log(authData)
  }

  async logIn () {
    // do a shallow login...just track basic stuff of user
    try {
      const signedInUser = await Lean.User.loginWithWeapp()
      this.data = signedInUser
      const current = Lean.User.current()
      console.log(current)
    } catch (e) {
      console.error(e)
    }
  }

  register () {
    console.log('hey')
  }
}
