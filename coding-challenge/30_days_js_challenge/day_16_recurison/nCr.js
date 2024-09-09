function fact(n) {
    if(n===0) return 1;

    return fact(n-1) * n;
}

function nCr(n,r) {
    let num, den;

    num = fact(n);
    den = fact(r) * fact(n-r);

    return num/den;
}

// console.log(nCr(4,2));

//recursive way

function recursiveNCR(n,r){
    if (n === r || r=== 0) {
        return 1;
    }
    return recursiveNCR(n-1,r-1) + recursiveNCR(n-1,r);
}

//tower of hanoi

function TOH (n,a,b,c) {
    if (n > 0) {
        TOH(n-1,a,c,b);
        console.log(`From ${a} to ${c}`);
        TOH(n-1,b,a,c);
    }
}

