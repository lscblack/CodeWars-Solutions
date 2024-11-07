function digitalRoot(n) {
    while (n > 9) {
        n =  n.toString().split('').reduce((sum,digit) => sum + parseInt(digit),0 );
    }
    return n
}

let data = digitalRoot(4569839282)
console.log(data)
