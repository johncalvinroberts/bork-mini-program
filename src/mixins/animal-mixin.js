import wepy from 'wepy'
import Lean from 'leancloud-storage'
import { appId, appKey } from '@/secret_keys'

export default class AnimalMixin extends wepy.mixin {
  /*
    okay so this kind of sucks but i am just going to use this mixin
    for fetching data when the user is not logged in
    and/or just fetching animal stuff
  */

  constructor () {
    super()
    Lean.init({
      appId: appId,
      appKey: appKey
    })
  }
  computed ={}

  data = {
    animalInfo: {
      name: '',
      intro: '',
      gender: 'male',
      type: 'dog',
      available: true,
      fixed: true
    }
  }

  async fetchAnimal (id) {
    const query = new Lean.Query('Animal')
    const queryResults = await query.get(id)
    this.rawAnimalObj = queryResults
    console.log(this.rawAnimalObj)
    this.animalInfo = queryResults.toJSON()
    console.log(this.animalInfo)
    this.images = this.animalInfo.images || []
    this.$apply()
  }
}
