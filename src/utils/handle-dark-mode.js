import { getStore } from 'wepy-redux'

const handler = () => {
  const store = getStore()
  const {darkMode} = store.getState()
  console.log('yoooyoyiyiyi')
  wx.setNavigationBarColor({
    frontColor: darkMode ? '#ffffff' : '#000000',
    backgroundColor: darkMode ? '#000000' : '#ffffff',
    animation: {
      duration: 300,
      timingFunc: 'easeInOut'
    }
  })
}

export default handler
