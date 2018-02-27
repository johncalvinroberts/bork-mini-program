/*
  Creates a bunch of data on the LeanCloud data base for testing
  Creates users and animals
*/

const keys = require('./keys')
const Lean = require('leancloud-storage')
const faker = require('faker')

class SeedBuilder {
  constructor () {
    Lean.init({
      appId: keys.appId,
      appKey: keys.appKey
    })
    this.images = []
    this.users = []
    this.animals = []
    this.createSeeds()
  }

  async createSeeds () {
    try {
      await this.getImageUrls()
      await this.createUsers()
      await this.createAnimals()
      await this.collectData()
      console.log(`SWEET! Made ${this.users.length} users and ${this.animals.length} animals 😄`)
    } catch (err) {
      console.log('oh fuuhh...error!!!!!!!')
      console.error(err)
    }
  }

  async getImageUrls () {
    try {
      const imageQuery = new Lean.Query('_File')
      const imageRes = await imageQuery.find()
      this.images = imageRes.map(imageObj => imageObj.attributes.url)
    } catch (err) {
      Promise.reject(err)
    }
  }

  async createUsers () {
    let count = 0
    while (count < 1) {
      if (count % 2 > 0) {
        faker.locale = 'zh_CN'
      } else {
        faker.locale = 'en'
      }
      const user = await this.createUser()
      this.users.push(user)
      count++
    }
  }

  async createUser () {
    const user = new Lean.User()
    const userName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const avatarUrl = this.images[Math.floor(Math.random() * this.images.length)]
    const userInfo = {
      wxUsername: userName,
      isRescuer: true,
      rescueVerified: true,
      adoptVerified: true,
      nickName: faker.name.findName(),
      personalNote: faker.lorem.sentence(),
      gender: Math.floor(Math.random() * 2 + 1),
      city: 'Jingan',
      country: 'China',
      province: 'Shanghai',
      avatarUrl: avatarUrl,
      age: Math.floor(Math.random() * 90).toString(),
      idNumber: userName,
      idType: 'chinese_id'
    }
    user.setUsername(userName)
    user.setPassword('123123')
    user.set(userInfo)
    const acl = new Lean.ACL()
    acl.setPublicWriteAccess(true)
    acl.setPublicReadAccess(true)
    user.setACL(acl)
    try {
      const userRes = await user.signUp()
      console.log(`created user!!! name: ${userInfo.nickName}`)
      return userRes
    } catch (err) {
      Promise.reject(err)
    }
  }

  async createAnimals () {
    for (const user of this.users) {
      let count = Math.floor(Math.random() * 8 + 1)
      while (count < 30) {
        if (count % 2 > 0) {
          faker.locale = 'zh_CN'
        } else {
          faker.locale = 'en'
        }
        const animal = await this.createAnimal(user)
        this.animals.push(animal)
        count++
      }
    }
  }

  async createAnimal (user) {
    const animal = new Lean.Object('Animal')
    const location = new Lean.GeoPoint({
      latitude: parseFloat((Math.random() * (35 - 27 + 1) + 27).toFixed(5)),
      longitude: parseFloat((Math.random() * (130 - 120 + 1) + 120).toFixed(5))
    })
    const ageUnitNum = Math.floor(Math.random() * 3 + 1)
    let ageUnit = 'weeks'
    if (ageUnitNum === 2) ageUnit = 'months'
    if (ageUnitNum === 3) ageUnit = 'years'
    const images = []
    let imageCount = Math.floor(Math.random() * (5 - 1) + 1)
    while (imageCount < 7) {
      images.push(this.images[Math.floor(Math.random() * this.images.length)])
      imageCount++
    }
    const animalInfo = {
      images,
      user,
      ageUnit,
      location,
      available: true,
      name: faker.name.firstName(),
      intro: faker.lorem.sentence(),
      vaccinated: Math.floor(Math.random() * 2 + 1) === 1,
      type: Math.floor(Math.random() * 2 + 1) === 1 ? 'dog' : 'cat',
      gender: Math.floor(Math.random() * 2 + 1) === 1 ? 'male' : 'female',
      fixed: Math.floor(Math.random() * 2 + 1) === 1,
      dewormed: Math.floor(Math.random() * 2 + 1) === 1,
      microchipped: Math.floor(Math.random() * 2 + 1) === 1,
      deflead: Math.floor(Math.random() * 2 + 1) === 1,
      age: Math.floor(Math.random() * 12 + 1).toString()
    }
    animal.set(animalInfo)
    const acl = new Lean.ACL()
    acl.setPublicWriteAccess(true)
    acl.setPublicReadAccess(true)
    animal.setACL(acl)
    try {
      const animalRes = await animal.save()
      console.log(`made a sweet animal!! name: ${animalInfo.name}`)
      return animalRes
    } catch (err) {
      Promise.reject(err)
    }
  }

  async collectData () {
    const userIds = this.users.map(user => user.id)
    const animalIds = this.animals.map(animal => animal.id)
    const testCase = new Lean.Object('TestCase').set({userIds, animalIds})
    const acl = new Lean.ACL()
    acl.setPublicWriteAccess(true)
    acl.setPublicReadAccess(true)
    testCase.setACL(acl)
    try {
      const testRes = await testCase.save()
      console.log(`Saved the test cases, objectId:::: ${testRes.id}`)
    } catch (err) {
      Promise.reject(err)
    }
  }
}

const guy = new SeedBuilder()

exports.default = guy
