const sumStrings = (a, b) => {
    const bigA = BigInt(typeof a === 'string' ? a : a.toString());
    const bigB = BigInt(typeof b === 'string' ? b : b.toString());
    return (bigA + bigB).toString();
};

console.log(sumStrings(12, '12')); 
