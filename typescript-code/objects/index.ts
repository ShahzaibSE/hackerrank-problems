/**
 * Deep Copy vs Shallow Copy
 */

// Reference Assignment

let obj1 = {
    a: 1, b: 2, c : {d : 10}
}

let obj2 = obj1; // This is reference assignment.

// Shallow copy

let obj3 = {...obj1}
console.log('Created shallow copy of obj1:obj3', obj3);
console.log('Before we made changes in obj1:', obj1);
obj3.c.d = 100
console.log('Making changes in the nested object will make changes in the shallow copy:', obj1);
// Let's try to make changes in the obj1 after creating shallow copy. 

// Shallow Copy: Suitable when the object has no nested structures or when you don’t need to modify nested objects.
// Deep Copy: Essential when you need full independence between the original object and the copy.

/* 
If we want full dependence of the object and make changes in the copy without making changes in the original object then
we make a deep copy.
*/

// Let's create a deep copy.
let obj4 = JSON.parse(JSON.stringify(obj1)) 
console.log('This is deep copy of obj1:obj4', obj4)

