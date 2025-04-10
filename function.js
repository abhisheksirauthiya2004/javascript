function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result = addTwoNumbers(3,5);

// console.log("result: ",result);

function loginUser(username="sam"){
    // if(username==undefined)
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// let ans = loginUser("Abhishek")
// console.log(ans)

// console.log(loginUser());

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,400,500,700))

// const user={
//     username:"hitesh",
//     price: 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject. price}`)
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:199
// })

const myNewArray = [200, 490, 100, 600]

function returnSecondValue(getArray){
    return getArray[3];
}

console.log(returnSecondValue(myNewArray));