import wepy from 'wepy'
import Lean from 'leancloud-storage'
import { appId, appKey } from '@/secret_keys'
import _isEmpty from 'lodash.isempty'

export default class AnimalMixin extends wepy.mixin {
  /*
    okay so this kind of sucks but i am just going to use this mixin
    for fetching data when the user is not logged in
    and/or just fetching animal stuff
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
    page: 1,
    params: {
      currentCoordinates: {},
      location: true,
      type: 'dog',
      age: false,
      gender: 0
    },
    rawAnimals: []
  }
  async fetchAnimal (id, selects = []) {
    const query = new Lean.Query('Animal')
      .include(_isEmpty(selects) ? '' : 'user')
      .select(selects)
    try {
      const queryResults = await query.get(id)
      this.rawAnimalObj = queryResults
      this.animalInfo = queryResults.toJSON()
      this.images = this.animalInfo.images || []
      this.$apply()
    } catch (err) {
      console.error(err)
      return Promise.reject(new Error(err))
    }
  }

  async fetchAnimals () {
    console.log(this.params.type)
    const skipAmt = (this.page * 10) - 10
    const query = new Lean.Query('Animal')
      .near('location', this.params.currentCoordinates)
      .notEqualTo('available', false)
      .include('user')
      .select(['name', 'images', 'gender', 'age', 'ageUnit', 'objectId', 'location', 'user.objectId'])
      .skip(skipAmt)
      .limit(10)
    if (this.params.type !== 'all') query.equalTo('type', this.params.type)
    const animalsRes = await query.find()
    animalsRes.map(animal => {
      const animalObj = animal.toJSON()
      const animalPoint = new Lean.GeoPoint(animalObj.location)
      const distance = animalPoint.kilometersTo(this.params.currentCoordinates).toFixed(3)
      animalObj.distance = distance
      this.rawAnimals.push(animalObj)
    })
  }
}
