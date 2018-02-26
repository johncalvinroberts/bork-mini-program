/*
  Removes all seed data from the leancloud database
*/

const keys = require('./keys')
const Lean = require('leancloud-storage')

class SeedRemover {
  constructor () {
    Lean.init({
      appId: keys.appId,
      appKey: keys.appKey
    })
    this.testCases = []
    this.animalsToRemove = []
    this.usersToRemove = []
    this.removeSeeds()
  }

  async removeSeeds () {
    console.log('fetching all the dummy data....')
    try {
      await this.fetchData()
      await this.destroyAnimals()
      await this.destroyTestCases()
      await this.destroyUsers()
    } catch (err) {
      console.log('ohh fuu...error!!...')
      console.dir(err)
    }
  }

  async fetchData () {
    try {
      const query = new Lean.Query('TestCase')
      const testData = await query.find()
      this.testCases = testData
      testData.map(test => {
        test.attributes.animalIds.map(animal => this.animalsToRemove.push(animal))
        test.attributes.userIds.map(user => this.usersToRemove.push(user))
      })
    } catch (err) {
      Promise.reject(err)
    }
  }

  async destroyAnimals () {
    const animals = this.animalsToRemove.map(animal => {
      const newAnimal = Lean.Object.createWithoutData('Animal', animal)
      return newAnimal
    })
    try {
      await Lean.Object.destroyAll(animals)
      console.log(`just destroyed ${this.animalsToRemove.length} animals. hope tht's chill lmao.`)
    } catch (err) {
      Promise.reject(err)
    }
  }

  async destroyTestCases () {
    try {
      await Lean.Object.destroyAll(this.testCases)
      console.log('deleted test cases')
    } catch (err) {
      console.error(err)
    }
  }

  async destroyUsers () {
    const users = this.usersToRemove.map(user => Lean.Object.createWithoutData('User', user))
    try {
      const user = users[0]
      const desRes = await user.destroy()
      console.log(desRes)
      console.log(`Just deleted all the test users too.`)
    } catch (err) {
      Promise.reject(err)
    }
  }
}

const guy = new SeedRemover()
exports.default = guy
