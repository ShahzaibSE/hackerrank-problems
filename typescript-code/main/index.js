var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Hello World");
var arr = [1, 2, 3];
var arr_copy = __spreadArray([], arr, true);
if (arr === arr_copy) {
    console.log("Both lists are equal");
}
var nums = [1, 2, 3, 4, 5, 100, 20.5];
var total = nums.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("Total from reduce: ".concat(total));
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
/**
 * Temporal Dead Zone:
 * */
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 5;
// Above code is an example of TDZ, we are trying to access the variable before it is initialized.
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
