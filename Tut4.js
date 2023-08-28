// Let, Const and Var

const accountId = 1235
let accountEmail = "abc@gmail.com"
var accountPass = "12345" //prefer not to use var because of issue in block scope and functional scope
accountCity = "Jaipur" //it will run but not recommended

let accountState //you can only assign the variable for future use if you will run this it will give you undefined value
//accountId = 254 //it will give you the error because const cannot be changed

accountEmail = "xyz@gmail.com"
accountPass = "8520"
accountCity = "Delhi"

//console.log(accountId)

console.table([accountEmail, accountPass, accountCity, accountState])