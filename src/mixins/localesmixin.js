import wepy from 'wepy'

export default class LocalesMixin extends wepy.mixin {
  constructor () {
    super()
    console.log('locales mixin constructor')
  }

  data = {
    t: {}
  }

  methods = {}

  setLocales (page) {
    this.page = page
    const _ = wepy.T._
    const pageLocales = _(page)
    this.t = pageLocales
    this.$apply()
  }
}
