console.log("Hello World")

let arr: number[] = [1,2,3]
let arr_copy: number[] = [...arr]

if(arr === arr_copy){
    console.log("Both lists are equal")
}