const name ="hitesh-ravi-aliya-jian"
const repoCount =50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('gamified')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4);
console.log(newString);

const newString1 = gameName.slice(-1,2);
console.log(newString1);

const newString2 = "   abhishek  "
console.log(newString2)
console.log(newString2.trim())

const url = "http://hitsh.com/hitshchaudhry%20chaudhry"

console.log(url.replace('%20', '-'))
console.log(name.split('-'));
