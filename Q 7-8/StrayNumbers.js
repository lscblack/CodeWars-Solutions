const stray = List => List.reduce((b, a) => a ^ b)

console.log(stray([1, 2, 1, 2, 3]))