import wepy from 'wepy'

export default class LocalesMixin extends wepy.mixin {
  constructor () {
    super()
    console.log('locales constructor')
    const isWeb = wepy.env === 'web'
    if (isWeb) {
      this.handleWebLocales()
    }
  }

  data = {
    t: {},
    currentPage: ''
  }

  methods = {}

  setLocales () {
    const _ = wepy.T._
    const pageLocales = _(this.currentPage)
    this.t = pageLocales
    this.$apply()
  }

  onLoad () {
    console.log('mixin onload')
    const pages = getCurrentPages()[0] // eslint-disable-line
    this.currentPage = pages ? pages.route.split('pages/')[1] : 'landing'
    console.log(this.currentPage)
    this.$apply()
    this.setLocales()
  }

  handleWebLocales () {
    console.log('handleWebLocales')
    this.currentPage = window.location.hash.split('#!/pages/')[1]
    const _ = wepy.T._
    const pageLocales = _(this.currentPage)
    this.data.t = Object.assign({}, pageLocales)
  }
}
