function getSum(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
  
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  let res = getSum(-1, 0);
  console.log(res);