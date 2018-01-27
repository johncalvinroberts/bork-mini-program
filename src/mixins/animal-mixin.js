import wepy from 'wepy'
import Lean from 'leancloud-storage'
import { appId, appKey } from '@/secret_keys'

export default class AnimalMixin extends wepy.mixin {
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
      gender: 1,
      type: 'dog'
    }
  }

  async fetchAnimal (id) {
    const query = new Lean.Query('Animal')
    const queryResults = await query.get(id)
    this.animalInfo = queryResults.toJSON()
    this.images = this.rawAnimalData.images || []
    this.$apply()
  }
}
