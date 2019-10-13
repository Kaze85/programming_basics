const listItems = document.getElementsByTagName("li");

let firstItem = listItems[0].innerText;

listItems[0].classList.add("red");
listItems[listItems.length - 1].style.color =  "yellow"; //Niet goed, opmaak alleen in CSS


//reference
const body = document.getElementById("body");
//create
let h1 = document.createElement("h1");
h1.innerText = "Header";
// add
// append = last
body.append(h1);
// prepend = first
body.prepend(h1);

const groceryList = [
    {
       name: "tandenborstel",
       price: ("$" + 2)
    },
    {
        name: "deoderant",
        price: ("$" + 5)
    },
    {
        name: "bakmeel",
        price: ("$" + 2)
    },
    {
        name: "wortels",
        price: ("$" + 3)
    }
];


function writeToDom(name, price) {
    //groceryList[0].name and groceryList[0].price
    //1. welke plek
    const table = document.getElementById("groceryList");
    //2. welke elementen
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    
    tdName.innerText = name;
    tdPrice.innerText = price;
    //3. append
    tr.append(tdName);
    tr.append(tdPrice);
    table.append(tr);
    
}

for (let i = 0; i < groceryList.length; i++) {
    writeToDom(groceryList[i].name, groceryList[i].price);
}
