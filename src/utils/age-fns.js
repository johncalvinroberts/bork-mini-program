/*
  Various functions used for handling age in days of animals
  the main useful function is _daysToString, which takes days and returns a
  localized string in weeks, months, or years
*/

import wepy from 'wepy'
import locales from './date-locales'

export const _unitToDays = (unit, number) => {
  if (unit === 'weeks') {
    return parseInt(number) * 7
  } else if (unit === 'months') {
    return parseInt(number) * 30
  } else if (unit === 'years') {
    return parseInt(number) * 365
  }
}

export const _unitAndDaysToNumber = (unit, days) => {
  if (unit === 'weeks') {
    return days / 7
  } else if (unit === 'months') {
    return days / 30
  } else if (unit === 'years') {
    return days / 365
  }
}

export const _daysToString = (days) => {
  const locale = (wepy.T.locale === 'en') ? locales['en'] : locales['zh_CN']
  if (days < 50) {
    const weeks = Math.floor(parseInt(days) / 7)
    return `${weeks} ${locale['weeks']}`
  } else if (days > 50 && days < 365) {
    const months = Math.floor(parseInt(days) / 30)
    return `${months} ${locale['months']}`
  } else {
    const years = Math.floor(parseInt(days) / 365)
    return `${years} ${locale['years']}`
  }
}

export const _getUnit = (days) => {
  if (days < 50) return 'weeks'
  if (days > 50 && days < 365) return 'months'
  if (days > 365) return 'years'
}
