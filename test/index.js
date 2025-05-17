const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce((total, number) => {
    return total + number
}, 10)

console.log(result);