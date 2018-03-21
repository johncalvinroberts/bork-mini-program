import _isEmpty from 'lodash.isempty'
import {alphaNumeric, cjk, empty} from '@/utils/regex'

export default function _checkEmptyFields (fields) {
  const emptyFields = Object.keys(fields).filter(field => {
    let value = fields[field]
    if (value === null) return field
    if (value === '') return field
    if (typeof value === 'object' && Object.keys(value).length === 0) return field
    if (typeof value === 'object' && _isEmpty(value)) return field
    if (typeof value === 'string' && empty.test(value)) return field
    if (typeof value === 'string') {
      // return the field if the value is NOT chinese AND does NOT contain alphanumeric
      if (!value.match(alphaNumeric) && !value.match(cjk)) {
        console.log(`field: ${field}, value: ${value}`)
        return field
      }
    }
  })
  return _isEmpty(emptyFields) ? false : emptyFields
}
