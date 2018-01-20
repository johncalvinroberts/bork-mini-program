import promisify from './promisify'
import wepy from 'wepy'
const allFunctions = [
  'getSetting',
  'request',
  'authorize',
  'getUserInfo'
]

function _wxPromisify (fnList) {
  fnList.map(fnName => {
    if (fnName === 'request') fnName = fetch
    Object.defineProperty(wepy, fnName, {value: promisify(wepy[fnName])})
  })
}

function wxPromisify () {
  return _wxPromisify(allFunctions)
}

export default wxPromisify
