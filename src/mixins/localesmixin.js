import wepy from 'wepy'

export default class LocalesMixin extends wepy.mixin {
  constructor () {
    super()
    console.log('locales mixin constructor')
  }

  data = {
    t: {}
  }
  methods = {
    registerLocale () {
      console.log('here bith')
      wepy.T.setLocale(this.$parent.globalData.lang)
    }
  }

  setLocales (page) {
    const _ = wepy.T._
    const pageLocales = _(page)
    this.t = pageLocales
    this.$apply()
  }
}
