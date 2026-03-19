/**
 * Math utility functions
 */

export const add = (a, b) => a + b

export const subtract = (a, b) => a - b

export const multiply = (a, b) => a * b

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

export const factorial = n => {
  if (n < 0) {
    throw new Error('Cannot calculate factorial of negative number')
  }
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

export const isPrime = n => {
  if (n <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
