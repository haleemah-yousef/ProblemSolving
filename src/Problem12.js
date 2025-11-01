/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */



function deepEquals(obj1,obj2) {
    if(obj1===obj2)
        return true;

    keys1=Object.keys[obj1]
    keys2 = Object.keys[obj2]
    /**
     * we can compare the keys and if the key it self is an object we will call the function again
     */
}


console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
console.log(deepEquals(1,1)); // true
