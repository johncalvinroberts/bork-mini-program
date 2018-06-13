const keys = require('./keys')
const Lean = require('leancloud-storage')

class AnimalQrFixer {
  constructor () {
    Lean.init({
      appId: keys.appId,
      appKey: keys.appKey
    })
    this.fixAnimals()
  }

  async fixAnimals () {
    try {
      const animalQuery = new Lean.Query('Animal')
      const animals = await animalQuery.find()
      console.log(animals.length)
      // await Lean.Cloud.run('generateQrCode', '5b20cbd1ac502e00316b66b2')
      for (const animal of animals) {
        console.log(animal.id)
        await Lean.Cloud.run('generateQrCode', {id: animal.id})
        console.log('updated')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const singleton = new AnimalQrFixer()
