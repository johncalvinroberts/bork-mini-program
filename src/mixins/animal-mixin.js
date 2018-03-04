import wepy from 'wepy'
import Lean from 'leancloud-storage'
import { appId, appKey } from '@/secret_keys'
import _isEmpty from 'lodash.isempty'
import {_daysToString} from '@/utils/age-fns'

export default class AnimalMixin extends wepy.mixin {
  /*
    okay soooo i am just going to use this mixin
    for fetching data when the user is not logged in
    and/or just fetching animal stuff.
  */

  constructor () {
    super()
    try {
      Lean.init({
        appId: appId,
        appKey: appKey
      })
    } catch (err) {
      console.log('it already dun initd')
    }
  }

  computed ={}

  data = {
    animalInfo: {
      name: '',
      intro: '',
      gender: 'male',
      type: 'dog',
      available: true,
      fixed: true,
      vaccinated: true
    },
    animalsLoading: true,
    page: 1,
    rawAnimals: [],
    lastPage: false,
    params: {
      currentCoordinates: {},
      location: true,
      type: 'dog',
      gender: 'all',
      minAge: null,
      maxAge: null
    }
  }
  async fetchAnimal (id, selects = [], editPage = false) {
    const query = new Lean.Query('Animal')
      .include(_isEmpty(selects) ? '' : 'user')
      .select(selects)
    try {
      const queryResults = await query.get(id)
      this.rawAnimalObj = queryResults
      const animalInfo = queryResults.toJSON()
      if (!editPage) animalInfo.age = _daysToString(animalInfo.age)
      this.animalInfo = animalInfo
      this.images = this.animalInfo.images || []
      this.$apply()
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async fetchAnimals () {
    this.animalsLoading = true
    this.$apply()
    const skipAmt = (this.page * 10) - 10
    const query = new Lean.Query('Animal')
      .near('location', this.params.currentCoordinates)
      .notEqualTo('available', false)
      .include('user')
      .select(['name', 'images', 'gender', 'age', 'ageUnit', 'objectId', 'location', 'user.objectId'])
      .skip(skipAmt)
      .limit(10)
    if (this.params.minAge) query.greaterThan('age', this.params.minAge)
    if (this.params.maxAge) query.lessThanOrEqualTo('age', this.params.maxAge)
    if (this.params.type !== 'all') query.equalTo('type', this.params.type)
    if (this.params.gender !== 'all') query.equalTo('gender', this.params.gender)
    const animalsRes = await query.find()
    if (_isEmpty(animalsRes)) {
      this.lastPage = true
    }
    animalsRes.map(animal => {
      const animalObj = animal.toJSON()
      animalObj.age = _daysToString(animalObj.age)
      const animalPoint = new Lean.GeoPoint(animalObj.location)
      const distance = animalPoint.kilometersTo(this.params.currentCoordinates).toFixed(2)
      animalObj.distance = distance
      this.rawAnimals.push(animalObj)
    })
    this.animalsLoading = false
    this.$apply()
  }

  async resetParamsAndFetch () {
    this.rawAnimals = []
    this.page = 1
    this.$apply()
    this.fetchAnimals()
  }

  async generateQrCode (id) {
    try {
      this.$invoke('fidoloader', 'showLoading', '')
      const qrCode = await Lean.Cloud.run('generateQrCode', {id})
      this.$invoke('fidoloader', 'hideLoading', '')
      // returns a binary stream
      console.log(qrCode)
      return qrCode
    } catch (err) {
      Promise.reject(err)
    }
  }
}
