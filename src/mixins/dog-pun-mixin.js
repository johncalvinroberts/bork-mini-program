import wepy from 'wepy'
export default class DogPunMixin extends wepy.mixin {
  data = {
    chinesePuns: [
      '小狗正在跑赶来。。。'
    ],
    englishPuns: [
      'Run doggy run',
      'I\'m not fat I\'m just a little husky'
    ]
  }
  computed = {
    loadingMessage () {

    }
  }
}
