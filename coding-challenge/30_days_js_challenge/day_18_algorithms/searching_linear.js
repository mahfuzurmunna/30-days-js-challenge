function linearSearch (arr,target) {
    let index;
    arr.forEach(number => {
        if(target === number) index = arr.indexOf(number);
    })
    return number;
}

const arr= [10,20,30];

console.log(linearSearch(arr,20));