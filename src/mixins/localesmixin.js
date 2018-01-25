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

  events = {
    'routechange': () => {
      console.log('yeaaaaaaboiii')
    }
  }

  setLocales () {
    const _ = wepy.T._
    const pageLocales = _(this.currentPage)
    this.t = pageLocales
    this.$apply()
  }

  onLoad () {
    const pages = getCurrentPages() // eslint-disable-line
    const currentPage = pages[(pages.length - 1)]
    this.currentPage = currentPage ? currentPage.route.split('pages/')[1] : 'landing'
    console.log(this.currentPage)
    this.$apply()
    this.setLocales()
  }

  handleWebLocales () {
    this.currentPage = window.location.hash.split('#!/pages/')[1]
    console.log(this.currentPage)
    const _ = wepy.T._
    const pageLocales = _(this.currentPage)
    this.data.t = Object.assign({}, pageLocales)
  }
}
