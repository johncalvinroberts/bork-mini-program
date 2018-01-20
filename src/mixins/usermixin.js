import wepy from 'wepy'

export default class UserMixin extends wepy.mixin {
  constructor () {
    super()
    console.log('user mixin constructor')
  }
}
