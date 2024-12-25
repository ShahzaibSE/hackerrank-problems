/**
 * Deep Copy vs Shallow Copy
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Reference Assignment
var obj1 = {
    a: 1, b: 2, c: { d: 10 }
};
var obj2 = obj1; // This is reference assignment.
// Shallow copy
var obj3 = __assign({}, obj1);
console.log('Created shallow copy of obj1:obj3', obj3);
console.log('Before we made changes in obj1:', obj1);
obj3.c.d = 100;
console.log('Making changes in the nested object will make changes in the shallow copy:', obj1);
// Let's try to make changes in the obj1 after creating shallow copy. 
// Shallow Copy: Suitable when the object has no nested structures or when you don’t need to modify nested objects.
// Deep Copy: Essential when you need full independence between the original object and the copy.
/*
If we want full dependence of the object and make changes in the copy without making changes in the original object then
we make a deep copy.
*/
// Let's create a deep copy.
var obj4 = JSON.parse(JSON.stringify(obj1));
console.log('This is deep copy of obj1:obj4', obj4);
