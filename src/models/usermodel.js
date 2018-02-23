import Lean from '@/utils/av-weapp-min'
import { appId, appKey } from '@/secret_keys'
import wepy from 'wepy'
import _isEmpty from 'lodash.isempty'

export default class UserModel {
  constructor () {
    Lean.init({
      appId: appId,
      appKey: appKey
    })
    this.data = {}
    this.rescues = []
    this.rescueCount = null
    this.likes = []
    this.applications = []
    this.requests = []
    this.id = null
    this.currentUser()
  }

  currentUser () {
    const current = Lean.User.current()
    if (current) {
      this.id = current.id
      this.data = current.toJSON()
    }
    return current
  }

  // GETTERS
  get isRegistered () {
    return !_isEmpty(this.data)
  }

  get isRescuer () {
    return !_isEmpty(this.data) && this.data.isRescuer
  }

  get attributes () {
    return _isEmpty(this.data) ? null : this.data
  }

  get language () {
    return this.data.language || 'zh_CN'
  }

  get objectId () {
    return this.data.objectId || ''
  }

  get lastRescuePage () {
    return Math.ceil(this.rescueCount / 10)
  }

  // AUTHORIZATION & LOGIN SHIT
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

  async logOut () {
    await wepy.clearStorage()
    this.data = {}
  }

  // WX AUTHORIZATION STUFF
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

  // RESCUES
  async createRescue () {
    const animal = new Lean.Object('Animal')
    const user = Lean.User.current()
    const available = true
    animal.set({user, available})
    const savedAnimal = await animal.save()
    return savedAnimal
  }

  async deleteRescue (objectId) {
    const animal = Lean.Object.createWithoutData('Animal', objectId)
    try {
      const deleteRes = await animal.destroy()
      return deleteRes
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async updateRescue (objectId, rawParams) {
    const {location, ...params} = rawParams
    const geoPoint = new Lean.GeoPoint(location)
    const animal = Lean.Object.createWithoutData('Animal', objectId)
    animal.set(params)
    animal.set({location: geoPoint})
    try {
      const animalRes = await animal.save()
      return animalRes.toJSON()
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async fetchRescues (page = 1, refresh = false) {
    // Return the rescues array if refresh is not required
    if (!_isEmpty(this.rescues) && !refresh) return this.rescues
    if (page === 1) this.rescues.length = 0
    const skipAmt = (page * 10) - 10
    const query = new Lean.Query('Animal')
    query.equalTo('user', Lean.User.current())
      .skip(skipAmt)
      .limit(10)
    try {
      const countQuery = this.rescues ? setTimeout(() => console.log(this.rescueCount), 0) : query.count()
      const findQuery = query.find()
      const [countRes, findRes] = await Promise.all([countQuery, findQuery])
      this.rescueCount = countRes
      findRes.map(animal => this.rescues.push(animal.toJSON()))
      return this.rescues
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  // APPLICATIONS
  async fetchApplications (refresh = false) {
    if (!_isEmpty(this.applications) && !refresh) return this.applications
    try {
      const query = new Lean.Query('Application')
        .equalTo('applicant', Lean.User.current())
        .include(['animal', 'applicant', 'owner'])
        // .exists('animal.name') // filter out applications that have had the animal deleted
        .select(['objectId',
          'status',
          'animal.objectId',
          'animal.images',
          'animal.name',
          'applicant.nickName'
        ])
      const appsRes = await query.find()
      this.applications = appsRes.map(app => app.toJSON())
      return this.applications
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async fetchApplication (id) {
    const query = new Lean.Query('Application')
      .include(['animal', 'applicant', 'owner'])
      .select([
        'status',
        'ownerMessage',
        'applicantMessage',
        'applicant.objectId',
        'applicant.nickName',
        'applicant.avatarUrl',
        'applicant.age',
        'applicant.province',
        'applicant.city',
        'applicant.gender',
        'applicant.isRescuer',
        'applicant.adoptVerified',
        'owner.nickName',
        'owner.objectId',
        'owner.avatarUrl',
        'owner.age',
        'owner.province',
        'owner.city',
        'owner.gender',
        'animal.name',
        'owner.isRescuer',
        'animal.objectId',
        'animal.images',
        'animal.age',
        'animal.ageUnit',
        'animal.neighborhood',
        'animal.type'
      ])
    try {
      const application = await query.get(id)
      return application.toJSON()
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }

  async submitApplication (animalId, ownerId, applicantMessage) {
    const application = new Lean.Object('Application')
    const applicant = Lean.User.current()
    const animal = Lean.Object.createWithoutData('Animal', animalId)
    const owner = Lean.Object.createWithoutData('User', ownerId)
    const acl = new Lean.ACL()
    acl.setWriteAccess(ownerId, true)
    acl.setWriteAccess(this.objectId, true)
    acl.setReadAccess(ownerId, true)
    acl.setReadAccess(this.objectId, true)
    application.set({applicant, owner, animal, applicantMessage})
    application.setACL(acl)
    try {
      const appRes = await application.save()
      this.applications.push(appRes.toJSON())
      return appRes.toJSON()
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }
  async deleteApplication (objectId) {
    const application = Lean.Object.createWithoutData('Application', objectId)
    try {
      const deleteRes = await application.destroy()
      const newApps = this.applications ? this.applications.filter(app => app.objectId !== objectId) : []
      this.applications = newApps
      console.log(this.applications)
      return deleteRes
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }
  // REQUESTS
  async fetchRequests (refresh = false) {
    if (!_isEmpty(this.requests) && !refresh) return this.requests
    try {
      const query = new Lean.Query('Application')
        .equalTo('owner', Lean.User.current())
        .include(['animal', 'applicant'])
        // .exists('animal') // filter out applications that have had the animal deleted
        .select([
          'animal.name',
          'animal.images',
          'applicantMessage',
          'status',
          'applicant.nickName',
          'applicant.avatarUrl'])
      const appsRes = await query.find()
      this.requests = appsRes.map(app => app.toJSON()).filter(app => app.animal)
      return this.requests
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async respondToRequest (id, {status, ownerMessage}) {
    try {
      const application = Lean.Object.createWithoutData('Application', id)
      application.set({status, ownerMessage})
      const applicationRes = await application.save()
      return applicationRes.toJSON()
    } catch (err) {
      return Promise.reject(new Error(err))
    }
  }

  async fetchApplicationWechat (id, isOwner) {
    const selects = ['applicant.wxUsername', 'owner.wxUsername']
    const query = new Lean.Query('Application')
      .include(['animal', 'applicant', 'owner'])
      .select(selects)
    const res = await query.get(id)
    return res.toJSON()
  }

  // LIKES
  async fetchLikes (refresh = false) {
    if (!_isEmpty(this.likes) && !refresh) return this.likes
    try {
      const query = new Lean.Query('Like')
        .equalTo('user', Lean.User.current())
        .include('animal')
        .select(['id',
          'animal.objectId',
          'animal.images',
          'animal.name',
          'animal.gender',
          'animal.ageUnit',
          'animal.age'])
      const queryRes = await query.find()
      this.likes = queryRes.map(like => like.toJSON())
      return this.likes
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async submitLike (animalId) {
    const like = new Lean.Object('Like')
    const user = Lean.User.current()
    const animal = Lean.Object.createWithoutData('Animal', animalId)
    like.set({user, animal})
    try {
      const likeRes = await like.save()
      this.likes.push(likeRes.toJSON())
      return likeRes
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async submitUnLike (animalId) {
    const likeId = this.likes.find(like => like.animal.objectId === animalId).objectId
    const like = Lean.Object.createWithoutData('Like', likeId)
    try {
      const destroyRes = await like.destroy()
      return destroyRes
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }
}
