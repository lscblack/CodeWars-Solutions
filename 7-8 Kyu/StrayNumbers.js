// ----- Using Reduce and Xor Operator
//  const stray = List => List.reduce((b, a) => a ^ b)

// console.log(stray([1, 2, 1, 2, 3]))
// ----- Using Index Of and LastIndexOf

const stray = array => array.find(data=>array.indexOf(data) == array.lastIndexOf(data))

console.log(stray([1, 2, 1, 2, 3]))
