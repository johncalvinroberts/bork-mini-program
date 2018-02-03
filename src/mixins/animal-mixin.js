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
      fixed: true
    },
    genderIcon: ''
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
}
