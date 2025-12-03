import { PrimeFactors } from '../Maths/PrimeFactors.js'

/**
 * Smallest Multiple
 * @link https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

export function findSmallestMultiple(maxDivisor) {
  const maxPowers = {}
  for (let divisor = 2; divisor <= maxDivisor; divisor++) {
    const factors = PrimeFactors(divisor)

    // combine/count prime factors
    let powers = {}
    for (const factor of factors) {
      powers[factor] = (powers[factor] ?? 0) + 1
    }

    // save largest factors
    for (const factor in powers) {
      if (powers[factor] > (maxPowers[factor] ?? 0)) {
        maxPowers[factor] = powers[factor]
      }
    }
  }

  // multiply all primes
  return Object.entries(maxPowers).reduce(
    (product, [prime, power]) => product * Math.pow(prime, power),
    1
  )
}
