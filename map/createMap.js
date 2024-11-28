//how to initiate a map in javascript

const mp=new Map();


//setting data in the map one by one
mp.set("apple",200);
mp.set('banana',100);
mp.set('orange',300);
mp.set('mango',250);

//iterating through each item in map
mp.forEach((item)=>{
    console.log(item);
    
})


//getting value of key by calling the name
console.log(mp.get('mango'));

//inserting value in map using an array

const newMap=new Map([
    ['apple',500],
    ['mango',200],
    ['banana',200],
    ['orange',300]
])
let text="";
newMap.forEach((value,key)=>{
    text+=value+":"+key
})

console.log(text);


//size method for finding size of map
console.log(newMap.size);

//deleting a key value pair by providing the key name

newMap.delete('banana');
console.table(newMap);


//deleting the complete map

// newMap.clear()

//checking if any key exist in it or not by using has method it will return the boolean value

console.log(newMap.has('banana'));
console.log(newMap.has('apple'));


//map enteries method

let newText="";

for(const x of newMap.entries()){
    newText+=x;
}
console.log(newText);

//using groupby clause in map method

const fruits=[
    {
        name:'apple',
        quantity:200
    },
    {
        name:'mango',
        quantity:300
    },
    {
        name:'banana',
        quantity:500
    },
    {
        name:'orange',
        quantity:250
    }
]

const result=Map.groupBy(fruits,function({quantity}){
    return quantity>250?'ok':'low'
})
console.log(result);

