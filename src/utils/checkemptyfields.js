import _isEmpty from 'lodash.isempty'
import {alphaNumeric, cjk} from '@/utils/regex'

export default function _checkEmptyFields (fields) {
  const emptyFields = Object.keys(fields).filter(field => {
    let value = fields[field]
    if (value === null) return field
    if (value === '') return field
    if (typeof value === 'object' && Object.keys(value).length === 0) return field
    if (typeof value === 'object' && _isEmpty(value)) return field
    if (typeof value === 'string') {
      if (!value.match(alphaNumeric) && !value.match(cjk)) return field
    }
  })
  return _isEmpty(emptyFields) ? false : emptyFields
}
