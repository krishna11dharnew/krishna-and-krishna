const accountid=1234
let accountmail="sita@gmail.com"
var accountpassword="12388"
accountcity="rbl"
let accountstate;

//accountid=2 //not allowed
 accountmail="ramji@gmail.com"
 accountpassword="99999"
accountcity="lucknow"
console.log(accountid)

console.table([accountid,accountmail,accountpassword,accountcity,accountstate])
/* prefer not to use var
because of issue in block scope and functional scope*/