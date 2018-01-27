import Lean from '@/utils/av-weapp-min'
import { appId, appKey } from '@/secret_keys'
import wepy from 'wepy'
import isEmpty from 'lodash.isempty'

export default class UserModel {
  constructor () {
    console.log('im initin')
    Lean.init({
      appId: appId,
      appKey: appKey
    })
    this.data = {}
    this.id = null
    this.currentUser()
  }

  currentUser () {
    const current = Lean.User.current()
    if (current) {
      this.id = current.id
      this.data = current.toJSON() // should switch this to current.toJSON()
    }
    return current
  }

  get isRegistered () {
    return !isEmpty(this.data)
  }

  get isRescuer () {
    return !isEmpty(this.data) && this.data.isRescuer
  }

  get attributes () {
    return isEmpty(this.data) ? null : this.data
  }

  get language () {
    return this.data.attributes.language || 'zh_CN'
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

  async fetchUpdate () {
    const current = await Lean.User.current().fetch()
    console.log(current)
    this.data = current.toJSON()
    return this.data
  }

  async updateProfileInfo (params) {
    try {
      const updatedUser = await Lean.User.current().set(params).save()
      this.data = updatedUser.toJSON()
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
      this.id = updatedUser.id
      this.data = updatedUser.toJSON()
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async createRescue () {
    const animal = new Lean.Object('Animal')
    const user = Lean.User.current()
    const active = false
    animal.set({user, active})
    const savedAnimal = await animal.save()
    return savedAnimal
  }

  async logOut () {
    await wepy.clearStorage()
    this.data = {}
  }

  async fetchLikes () {
    console.log('anahsfhas')
  }

  async fetchApplications () {
    console.log('haha...')
  }

  async fetchRequests () {
    console.log('fetch requests')
  }

  async fetchRescues () {
    console.log('fetch rescues')
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

  async requestPicture () {
    const authData = await wepy.getSetting()
    if (!authData.authSetting['scope.camera']) {
      try {
        await wepy.authorize({scope: 'scope.camera'})
      } catch (err) {
        console.error(err)
        return err
      }
    }
  }
}
