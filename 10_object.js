//there are threee ways to make an object one of this is as follwed as below(using ****object litral notation***)
//the object literal symbol is {}
//creating an object with property and value
var user= {
    rangeTilesPerTeurn:3,
    socialSkills:30,
    streeetSamrts:30,
    health:40,
    specialAbility:"Young and ambitious",
    greeting:"Let's make some money"
}
console.log(user);//displaying the values


//example of table object
var table = {
    legs:3,
    color:"brown",
    price:20,
}
console.log(table)//displaying the values

//alternative ways to store the object is first create an empty object and later on give the vale and prop
var house1 = {};
house1.rooms = 4;
house1.color = "pink";
house1.price = 20000;
console.log(house1);

//making objects with both methods combined combined
var house = {
    price:20000,
    owner:"Aditya",
}
console.log(house);
house.color = "Black";
console.log(house);

//buildding the object with ****bracket notation***
var house2 = {};
house2["rooms"] = 4;
house2["color"]= 'Black';
house2["Price"]= 20000;
console.log(house2);

//using the bracket and dot notation on same
var car = {};
car.color = "black";
car["color"] = "Black";
car.price = 20000;
car["price"]= 40000;
console.log(car); //output resulted in { color: 'Black', price: 40000 } seems like bracket guys got prefrence

//THings to note about bracket notation
/**
 * one can store large numbers of character as property key
 * one store property key as number
 * */
//using array and objects combined
var arrofKeys = ['speed','altitude','color']
var drone = {
    speed:100,
    altitude:200,
    color:"red"
}
for(var i=0;i<arrofKeys.length;i++){
    console.log(drone[arrofKeys[i]]);
}