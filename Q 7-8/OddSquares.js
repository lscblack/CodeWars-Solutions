const oddSquares = (array) => {
    var odds = array.filter((num) => (num & 1)).map(num => num * num)
    return odds
}
console.log(oddSquares([10, 15, 20, 25, 30]))