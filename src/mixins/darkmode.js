import wepy from 'wepy'
import { connect } from 'wepy-redux'
import { toggleDark } from '@/store/actions'

export default class DarkMode extends wepy.mixin {
  watch = {
    darkMode () {
      console.log('chaaanged dark mode')
    }
  }
  methods = {
    _toggleDark () {
      toggleDark()
      this.$apply()
    }
  }
}
