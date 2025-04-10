// var c = 300
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner: ", a);
}

// console.log(a);
// console.log(b);
console.log(a);

// // NESTED SCOPE

function one(){
    const username1 = "Abhishek"

    function two(){
        const website = "youtube"
        console.log(username1)
    }
    // console.log(website) // bcause it only accessible through its scope
    two()
}
one()

if(true){
    const username ="hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        console.log(username+ website)
    }
    // console.log(website)
}
// console.log(username);
console.log(addOne(2))
function addOne(num){
    return num+1;
}

// console.log(addTwo(4)) // function expression cannot we hoisted/declared before declaration
const addTwo = function(num){
    return num+2
}
console.log(addTwo(4))
