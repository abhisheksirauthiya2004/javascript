// singleton when we define as constructor
// we define ibject two types as lietral and constructor
const mySym = Symbol("key1")
const jsUser = {
    name:"Abhishek",
    "full name":"Abhishek Sirauthiya",
    [mySym]: "mykey1",
    age: 20,
    location:"jaipur",
    email:"abhisheksirauthiya2004@gmail.com",
    isLoggedIn: false,
    lastLoggingDays:["monday", "tuesday"]
} 
// we can acces by two ways .(dot) and square braces

console.log(jsUser.email)
console.log(jsUser["full name"])
console.log(typeof mySym)
console.log(jsUser[mySym])

jsUser.email = "how@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "who@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

