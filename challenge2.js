function orderedCount(text) {
    const counts = new Map();
    for (const char of text) {
      counts.set(char, (counts.get(char) || 0) + 1);
    }
    return Array.from(counts, ([char, count]) => [char, count]);
  }
  console.log(orderedCount("abracadabra"));  // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount("Code Wars"));   // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
console.log(orderedCount("233312"));      // [['2', 2], ['3', 3], ['1', 1]]
console.log(orderedCount(""));            // []
