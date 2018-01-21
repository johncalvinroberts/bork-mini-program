import Lean from '@/utils/av-weapp-min'
import { appId, appKey } from '@/secret_keys'
import wepy from 'wepy'
import isEmpty from 'lodash.isempty'

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
    return !isEmpty(this.data)
  }

  get isRescuer () {
    if (!isEmpty(this.data) && this.data.is_rescuer) {
      return true
    }
    return false
  }
  get attributes () {
    return this.data || null
  }

  async authorize () {
    const authData = await wepy.getSetting()
    if (!authData.authSetting['scope.userInfo']) {
      try {
        await wepy.authorize({scope: 'scope.userInfo'})
      } catch (err) {
        console.error(err)
        return err
      }
    }
    try {
      await this.logIn()
      return this.data
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async updateBasicInfo (params) {
    try {
      const updatedUser = await Lean.User.current().set(params).save()
      this.data = updatedUser.toJSON()
      console.log(updatedUser.toJSON())
      return updatedUser
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async logIn () {
    try {
      const loginPromise = Lean.User.loginWithWeapp()
      const wxPromise = wepy.getUserInfo()
      const [loginInfo, {userInfo}] = await Promise.all([loginPromise, wxPromise]) // eslint-disable-line no-unused-vars
      const updatedUser = await Lean.User.current().set(userInfo).save()
      this.data = updatedUser.toJSON()
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
