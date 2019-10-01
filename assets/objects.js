const me = {
    name: "Kaycee",
    age: 20,
    previousDiploma: "Havo",
    favTransport: {
        name: "voertuig",
        wheels: 22
    },
    fiveNames: ["name1", "name2", "name3", "name4", "name5"],
    testFunction: function() {
        console.log(this.favTransport.name);
    }
};

console.log(me);

me.hobby = "games";

console.log(me);

const test = {
    array: [1, 2, 3, 4, 5],
    func: function functionName() {
        console.log("test"); 
        for (let i = 0; i < test.array.length; i++) {
            console.log(test.array[i]);
        }  
    }
};

console.log(test);


test.func();

const products = [
    {
        articleName: "tandenborstel",
        price: 2.19
    },
    {
        articleName: "deoderant",
        price: 3.19
    },
    {
        articleName: "kippenvlees",
        price: 4.99
    }
];

sum = 0;
products.forEach(function(value, index, arr) {
    sum += value.price;
    console.log(sum);
});


// for (let i = 0; i < me.fiveNames.length; i++) {
//     console.log(me.fiveNames[i]);  
// }



me.printTransportAndNames = function() {
    console.log(`Mijn favoriete vervoersmiddels is de ${me.favTransport.name} en die heeft ${me.favTransport.wheels} wielen.`);

    me.fiveNames.forEach(function(value) {
        console.log(value);
    });
}

me.printTransportAndNames();