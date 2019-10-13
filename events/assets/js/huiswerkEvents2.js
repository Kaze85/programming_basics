// assignement 2

window.addEventListener("load", init);

function init() {
    const addButton = document.getElementById("addButton");
    
    addButton.addEventListener("click", addProduct);
}
let priceArray = [];

// add products to a table
function addProduct(event) {
    event.preventDefault();
    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    const total = document.getElementById("total");

    priceArray.push(Number(price));

    console.log(product+price);

    // Create the table elements
    let tr = document.createElement("tr");
    let tdProduct = document.createElement("td");
    let tdPrice = document.createElement("td");
    let remButton = document.createElement("td");
    let thTotal = document.createElement("th");

    // Append elements to table
    total.innerText = addTotal(Number(tdPrice.innerText), priceArray);
    tdProduct.innerText = product;
    tdPrice.innerText = Number(price);
    remButton.innerText = "verwijder"

    console.log(thTotal);
    
    console.log(total);
    tr.append(tdProduct);
    tr.append(tdPrice);
    tr.append(remButton);
    table.append(tr);

    // remove table row
    remButton.addEventListener("click", removeProduct);
}

// attempted removing of table row
function removeProduct(event) {
    event.preventDefault();
    console.log(event);
    let tr = event.target;
    console.log(tr);
}

// add a total of the prices
function addTotal(price, priceArray) {
    console.log(priceArray);
    console.log(price);
    let total = 0;

    for (let i = 0; i < priceArray.length; i++) {
        total += priceArray[i];
        console.log(total);
    }
    return total;
}