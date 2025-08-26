const fs = require("fs")
const data = fs.readFileSync("./input.txt","utf-8")
const lines = data.split("\n")
let total = 0;
for(let index of lines){
    const number = Number(index.split("")[1])
    total+=number
}
console.log(total)