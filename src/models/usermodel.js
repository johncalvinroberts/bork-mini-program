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
  get attributes () {
    return this.data.attributes
  }

  async authorize () {
    const authData = await wepy.getSetting()
    if (!authData.authSetting['scope.userInfo']) {
      try {
        await wepy.authorize({scope: 'scope.userInfo'})
      } catch (err) {
        console.log('fuuuck')
        console.log(err)
        return err
      }
    }
    try {
      const signedInUser = await this.logIn()
      return signedInUser
    } catch (err) {
      console.log('fuuuck')
      console.log(err)
      return err
    }
  }

  async logIn () {
    // do a shallow login...just track basic stuff of user
    try {
      const signedInUser = await Lean.User.loginWithWeapp()
      this.data = signedInUser
      return signedInUser
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async requestLocation () {
    const authData = await wepy.getSetting()
    if (!authData.authSetting['scope.userLocation']) {
      try {
        await wepy.authorize({scope: 'scope.userLocation'})
      } catch (err) {
        console.error(err)
        return err
      }
    }
  }

  register () {
    console.log('hey')
  }
}
