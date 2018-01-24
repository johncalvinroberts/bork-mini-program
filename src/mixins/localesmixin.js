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

  computed = {
    currentLang () {
      console.log('hahahahashfas')
      return this.$parent.$parent.globalData.lang
    }
  }

  watch = {
    currentLang (oldVal, newVal) {
      console.log(newVal)
    }
  }
  setLocales (page) {
    this.page = page
    const _ = wepy.T._
    const pageLocales = _(page)
    this.t = pageLocales
    this.$apply()
  }
}
