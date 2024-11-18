const arrayStats = (array) => {
    var sum = array.reduce((a, b) => { return a + b }, 0)
    var average = sum/array.length
    var min = Math.min(...array)
    var max = Math.max(...array)
    return {"sum":sum,"average":average,"min":min,"max":max}

}
console.log(arrayStats([9, 2, 3, 4]))