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
    return this.data.language || 'zh_CN'
  }

  get objectId () {
    return this.data.objectId || ''
  }

  async authorize () {
    const authData = await wepy.getSetting()
    if (!authData.authSetting['scope.userInfo']) {
      try {
        await wepy.authorize({scope: 'scope.userInfo'})
      } catch (err) {
        console.error(err)
        return Promise.reject(new Error(err))
      }
    }
    try {
      await this.logIn()
      return this.data
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
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
      return Promise.reject(new Error(err))
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
      return Promise.reject(new Error(err))
    }
  }

  async createRescue () {
    const animal = new Lean.Object('Animal')
    const user = Lean.User.current()
    const available = true
    animal.set({user, available})
    const savedAnimal = await animal.save()
    return savedAnimal
  }

  async updateRescue (objectId, params) {
    const animal = Lean.Object.createWithoutData('Animal', objectId)
    animal.set(params)
    try {
      const animalRes = await animal.save()
      return animalRes.toJSON()
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
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

  async fetchRescues (page = 1) {
    const skipAmt = (page * 10) - 10
    const query = new Lean.Query('Animal')
    query.equalTo('user', Lean.User.current())
      .skip(skipAmt)
      .limit(10)
    try {
      const queryRes = await query.find()
      return queryRes.map(animal => animal.toJSON())
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async requestLocation () {
    const authData = await wepy.getSetting()
    if (!authData.authSetting['scope.userLocation']) {
      try {
        await wepy.authorize({scope: 'scope.userLocation'})
      } catch (err) {
        console.error(err)
        return Promise.reject(new Error(err))
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
        return Promise.reject(new Error(err))
      }
    }
  }
}
