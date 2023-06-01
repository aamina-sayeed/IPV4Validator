import scan from "readline-sync";
import color from "cli-color";

console.clear()

let red=color.xterm(88)
let purple=color.xterm(165)
let green=color.xterm(156)
let pink=color.xterm(204)
let yellow=color.xterm(226)
let z=[]

function input(){
console.log(red("***********************************************"))
console.log(purple("IP ADDRESS VALIDATOR CLI"))
console.log(red("***********************************************"))
let x=scan.question(green("Enter the IP address:"))

let a=x.split(".")
if(a.length!=4){
    console.log(red("Invalid IP"))
    input()
    
}
a.forEach((x)=>{
    z.push(Number(x))
    })
    return z
}

function ip(z){
    let b=input()
if(b[0]>=0 && b[0]<=127 && b[1]<=255 && b[2]<=255 && b[3]<=255 && b[1]>=0 && b[2]>=0 && b[3]>=0){
    console.log(pink("Valid IP"))
    console.log(yellow("class A"))
    if(b[0]==10){
        console.log("Private")
    }
    else{
        console.log("Public")
    }
}
else if(b[0]>=128 && b[0]<=191 && b[1]<=255 && b[2]<=255 && b[3]<=255 && b[1]>=0 && b[2]>=0 && b[3]>=0){
    console.log(pink("Valid IP"))
    console.log(yellow("class B"))
    if(b[0]==172 && b[1]>=16 && b[1]<=31){
        console.log("Private")
    }
    else{
        console.log("Public")
    }
}
else if(b[0]>=192 && b[0]<=223 && b[1]<=255 && b[2]<=255 && b[3]<=255 && b[1]>=0 && b[2]>=0 && b[3]>=0){
    console.log(pink("Valid IP"))
    console.log(yellow("class C"))
    if(b[1]==168){
        console.log("Private")
    }
    else{
        console.log("Public")
    }
}
else if(b[0]>=224 && b[0]<=239 && b[1]<=255 && b[2]<=255 && b[3]<=255 && b[1]>=0 && b[2]>=0 && b[3]>=0){
    console.log(pink("Valid IP"))
    console.log(yellow("class D"))
    
}
else if(b[0]>=240 && b[0]<=255 && b[1]<=255 && b[2]<=255 && b[3]<=255 && b[1]>=0 && b[2]>=0 && b[3]>=0){
    console.log("Valid IP")
    console.log(yellow("class E"))
    
}
else{
    console.log(red("Invalid IP"))
}
}

ip()