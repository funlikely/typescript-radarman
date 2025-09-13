export class CatalanGenerator {
  /**
   * Generate the first n Catalan numbers (C0 ... C{n-1})
   * @param n number of Catalan numbers to generate (n >= 1)
   * @returns an array of the first n Catalan numbers
   */
  static generate(n: number): bigint[] {
    if (n <= 0) {
      return [];
    }

    const catalans: bigint[] = [1n]; // C0 = 1

    for (let i = 0; i < n - 1; i++) {
      // Use BigInt to handle large numbers
      const current = catalans[i];
      const next = (2n * BigInt(2 * i + 1) * current) / BigInt(i + 2);
      catalans.push(next);
    }

    return catalans;
  }
}

// Example usage:
console.log(CatalanGenerator.generate(10));
// [1n, 1n, 2n, 5n, 14n, 42n, 132n, 429n, 1430n, 4862n]
