console.log("Hello World")

let arr: number[] = [1,2,3]
let arr_copy: number[] = [...arr]

if(arr === arr_copy){
    console.log("Both lists are equal")
}

let nums: number[] = [1,2,3,4,5,100,20.5]
let total: number = nums.reduce((acc, curr) => acc + curr, 0)
console.log(`Total from reduce: ${total}`)


/**
 * Temporal Dead Zone:
 * */ 

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 5;

// Above code is an example of TDZ, we are trying to access the variable before it is initialized.

for(let i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i)
    },1000)
}