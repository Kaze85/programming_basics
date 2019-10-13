let list = [];
list.push(
    "Tandenborstel", 
    "Deoderant", 
    "Bakmeel", 
    "Wortels", 
    "Tandpasta", 
    "Krop Sla", 
    "Maggi", 
    "Croky Chips", 
    "WC papier", 
    "Shampoo"
);
console.table(list);

list.pop();
list.pop();
console.table(list);

list.push("test");
console.table(list);

//forEach loops
list.forEach(function(value, index) {
    console.log(`On index ${index} value is: ${value}`);
});

console.log("");

for (let i = 0; i < list.length; i++) {
    console.log(`On index ${i} value is: ${list[i]}`);
}

console.log("");

//map function
const arrayToLowerCase = list.map(function(value, index, array) {
    return value.toLowerCase();
});
console.table(arrayToLowerCase);

const newList = list.map(function(value, index, array) {
    return `product ${index}: ${value}`;
});
console.table(newList);

const productPrices = [2.10, 4.99, 5.60, .40, 5.44, 7.33, 2.33, 2.49, 2.10];

function sumOfPrices(numberedArray) {
    let total = 0;

    for (i = 0; i < numberedArray.length; i++) {
        total += numberedArray[i];
        console.log(total);
    }
    return total
}
console.log(sumOfPrices(productPrices));

//reduce
const sum = productPrices.reduce(function(currentVal, previousVal) {
    return currentVal + previousVal;
}, 0);

console.log(sum);

function avarageOfPrice(numberedArray) {
    let newAverage = sumOfPrices(numberedArray) / productPrices.length;
    return newAverage
}
console.log(avarageOfPrice(productPrices));


