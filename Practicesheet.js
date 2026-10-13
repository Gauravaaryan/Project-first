// let userSeq = [];
// let gameSeq = [];

// let btns = [ ".yellow",".red",".purple",".green" ];

// let start = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function( ){
//     if(start == false){
//         console.log("Game has started!!");
//         start = true;

//         levelUp();
//     }
// });

// function btnFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function( ){
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function( ){
//         btn.classList.remove("userflash");
//     },250);
// }

// function levelUp(){
//     userSeq = [];
//     level++;
//     h2.innerText = `${level}`;
//     console.log("This function is working");

//     let randomIdx = Math.floor(Math.random() * 3);
//     let randomColor = btns[randomIdx];
//     let randombtn = document.querySelector(`${randomColor}`);
//     console.log(randombtn)
//     btnFlash(randombtn);
//     gameSeq.push();
//     console.log(gameSeq);
// }

// function checkAns(idx){
//     console.log("The value of level", level);
//     let idx = level -1 ;

//     if(userSeq[idx] === gameSeq[idx]){
//         if(userSeq.length === gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//         console.log("Same value")
//     }
//     else{
//         h2.innerText = "Game Over";
//     }
// }

// function btnpress(){
//     console.log("Button was pressed");
//     let btn = this;
//     userFlash(btn);

//     let userColor = btn.getAttribute("id");
//     console.log("userColor");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for(let a of allbtns){
//     a.addEventListener("click",btnpress);
// }

let h2 = document.querySelector("h2")

function changeColor(color,delay,nextColor){
    settimeout(() => {
        h2.style.color = color;
        nextColor();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
        })
    })
})

// function saveToDb(data,success,failure){
//     let internet = Math.floor(Math.random() * 10) + 1;
//     if( internet > 4){
//         success();
//         console.log("Data was saved");
//     }
//     else{
//         failure();
//         console.log("Slow internet speed");
//     }
// }

saveToDb(
    "Aaryan Gaurav",
     ()=> {
        console.log("Success!");
        saveToDb("is",()=> {
            console.log("Success2");
            saveToDb(
                "Goat",
                ()=>{
                console.log("Success3");
            },
                ()=>{
                console.log("failure3");
            })
        },()=>{
            console.log("failure2");
        })
    }, 
    ()=>{
        console.log("Failure!");
    }
)

function saveToDb(data){
    return new Promise( (resolve,reject)=>{
        let internet = Math.floor(Math.random * 10) + 1;
        if(internet > 4){
            resolve("The value was stored");
        }
        else {
            reject("The value was not stored");
        }
    });
}

saveToDb("apan college")
    .then( (result)=> {
    console.log("Promise was resolved", result);
    return saveToDb("inner layer chaining");
})
    .then( (result)=>{
    console.log("Data above saved", );
    return saveToDb("second inner layer chaining");
})
    .then( ()=>{
    console.log("Data above was saved");
    return saveToDb("Third inner layer chaining");
    })
    .catch( ()=>{
    console.log("Promie was not resolved");
});


