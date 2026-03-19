import { describe, it, expect } from 'vitest'
import { reverse, isPalindrome, truncate, countWords, toKebabCase } from '../string.js'

describe('String utilities', () => {
  describe('reverse', () => {
    it('reverses a string', () => {
      expect(reverse('hello')).toBe('olleh')
    })

    it('handles empty string', () => {
      expect(reverse('')).toBe('')
    })
  })

  describe('isPalindrome', () => {
    it('returns true for palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true)
    })

    it('ignores case', () => {
      expect(isPalindrome('RaceCar')).toBe(true)
    })

    it('ignores non-alphanumeric characters', () => {
      expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    })

    it('returns false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false)
    })
  })

  describe('truncate', () => {
    it('truncates long strings', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...')
    })

    it('does not truncate short strings', () => {
      expect(truncate('Hello', 10)).toBe('Hello')
    })

    it('handles exact length', () => {
      expect(truncate('Hello', 5)).toBe('Hello')
    })
  })

  describe('countWords', () => {
    it('counts words in a sentence', () => {
      expect(countWords('Hello world')).toBe(2)
    })

    it('returns 0 for empty string', () => {
      expect(countWords('')).toBe(0)
    })

    it('handles multiple spaces', () => {
      expect(countWords('Hello   world')).toBe(2)
    })

    it('handles whitespace only', () => {
      expect(countWords('   ')).toBe(0)
    })
  })

  describe('toKebabCase', () => {
    it('converts camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world')
    })

    it('converts spaces to hyphens', () => {
      expect(toKebabCase('hello world')).toBe('hello-world')
    })

    it('converts PascalCase to kebab-case', () => {
      expect(toKebabCase('HelloWorld')).toBe('hello-world')
    })

    it('handles underscores', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world')
    })
  })
})
