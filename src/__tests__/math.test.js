import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide, factorial, isPrime } from '../math.js'

describe('Math utilities', () => {
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('adds negative numbers', () => {
      expect(add(-1, -2)).toBe(-3)
    })

    it('adds zero', () => {
      expect(add(5, 0)).toBe(5)
    })
  })

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2)
    })

    it('returns negative when second is larger', () => {
      expect(subtract(3, 5)).toBe(-2)
    })
  })

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(3, 4)).toBe(12)
    })

    it('returns zero when multiplied by zero', () => {
      expect(multiply(5, 0)).toBe(0)
    })
  })

  describe('divide', () => {
    it('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5)
    })

    it('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero')
    })
  })

  describe('factorial', () => {
    it('returns 1 for 0', () => {
      expect(factorial(0)).toBe(1)
    })

    it('returns 1 for 1', () => {
      expect(factorial(1)).toBe(1)
    })

    it('calculates factorial correctly', () => {
      expect(factorial(5)).toBe(120)
    })

    it('throws error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Cannot calculate factorial of negative number')
    })
  })

  describe('isPrime', () => {
    it('returns false for 1', () => {
      expect(isPrime(1)).toBe(false)
    })

    it('returns true for 2', () => {
      expect(isPrime(2)).toBe(true)
    })

    it('returns true for prime numbers', () => {
      expect(isPrime(7)).toBe(true)
      expect(isPrime(13)).toBe(true)
    })

    it('returns false for non-prime numbers', () => {
      expect(isPrime(4)).toBe(false)
      expect(isPrime(9)).toBe(false)
    })
  })
})
