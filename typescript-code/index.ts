console.log("Hello World")

let arr: number[] = [1,2,3]
let arr_copy: number[] = [...arr]

if(arr === arr_copy){
    console.log("Both lists are equal")
}

let nums: number[] = [1,2,3,4,5,100,20.5]
let total: number = nums.reduce((acc, curr) => acc + curr, 0)
console.log(`Total from reduce: ${total}`)