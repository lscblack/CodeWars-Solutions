const oddOrEven = array => 
    array.reduce((a, b) => a + b, 0) % 2 !== 0 ? "odd" : "even";
  

  console.log(oddOrEven([0, -1, 2]));
  