// creating an array using new keyword
const array=new Array()

// pushing values in array
array.push("swift")
array.push("s-cross")
array.push("desire")
array.push("thar")
array.push("G-wagon")

console.log(array);

// at() method returns the value at given index

console.log(array.at(3));

//concat method

const newarray=new Array(1,2,3,4,5,6,7,8);
// newarray.push(1)
// newarray.push(2)
// newarray.push(3)
// newarray.push(4)
// newarray.push(5)
// newarray.push(6)
// newarray.push(7)
// newarray.push(8)
// const res=newArray.concat(array)
// console.log(res);

//constructior return the function that created the array prototype

// let car=array.constructor;
// console.log(car);

//filter function in javascript
const response=newarray.filter(function(val){
    return val>=5;
})

console.log(response);
// console.log(newArray);
const cit=newarray.slice(1,3)
console.log(cit);





