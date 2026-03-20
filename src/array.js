/**
 * Array utility functions
 */

export const sum = arr => arr.reduce((a, b) => a + b, 0)

export const average = arr => (arr.length ? sum(arr) / arr.length : 0)

export const unique = arr => [...new Set(arr)]
