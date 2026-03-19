/**
 * String utility functions
 */

export const reverse = str => str.split('').reverse().join('')

export const isPalindrome = str => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleaned === reverse(cleaned)
}

export const truncate = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str
  }
  return str.slice(0, maxLength - 3) + '...'
}

export const countWords = str => {
  const trimmed = str.trim()
  if (trimmed === '') {
    return 0
  }
  return trimmed.split(/\s+/).length
}

export const toKebabCase = str => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
