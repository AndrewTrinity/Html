const randNum = Math.floor(Math.random);

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array2 = array1.filter(num => num % 2 !== 0)


const filterOdd = (arr) => {
    let filtered = [];
    for (let el of arr) {
        if (el % 2 !== 0) {
            filtered.push(el)
        }
    }
    return filtered
}

const squaredMap = (arr) => {
    let mapped = [];
    for (let el of arr) {
        mapped.push(el * el)
    }
    return mapped
}


const reducedArr = (arr) => {
    let reduced = [];
    let acc = 0;
    for (let el of arr) {
        acc+=el
    }
    return reduced
}