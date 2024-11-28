//creation of set

//putting an array inside the set
const set = new Set([1,2,3,4,5]);
console.log(set);

//adding value in set by using add method
set.add(2)
set.add(9)
set.add(6)
set.add(3)
console.log(set);

//listing set elements using for of loop

let item='';

for(const x of set){
    item+=x;
}
console.log(item);

//clear the set using clear method

// set.clear()

//delete the value in set by giving the value

set.delete(9)
console.log(set);

