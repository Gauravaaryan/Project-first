// let arr = [7,9,0,-2];

// let n = prompt("Enter the value of n");

// let final = arr.slice(arr.length - n,arr.length);

// console.log(final);

// let string = "";

// if(string.length == 0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

let string= "Aaryan";

let n = prompt("Enter the index of the letter");

if( string[n] >= "a" && string[n] <= "z" ){
    console.log("The letter is lowercased");
    console.log(string[n]);
}
else{
    console.log("The letter is not lowercased");
    console.log(string[n]);
}