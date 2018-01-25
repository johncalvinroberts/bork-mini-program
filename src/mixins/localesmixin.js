import wepy from 'wepy'

export default class LocalesMixin extends wepy.mixin {
  constructor () {
    super()
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
    const pages = getCurrentPages()[0] // eslint-disable-line
    this.currentPage = pages ? pages.route.split('pages/')[1] : 'landing'
    this.$apply()
    this.setLocales()
  }

  handleWebLocales () {
    this.currentPage = window.location.hash.split('#!/pages/')[1]
    const _ = wepy.T._
    const pageLocales = _(this.currentPage)
    this.data.t = Object.assign({}, pageLocales)
  }
}
