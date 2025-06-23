//stack---primitive and heap----> non primitive
let myinstaname="mekrishna"
let anothername=myinstaname
anothername="maihukrishna"
console.log(myinstaname)
console.log(anothername)



//...............................

let userone={
    email:"krishnakrish@gmail",
    upi:"krishna@sbi"
}
let usertwo=userone
usertwo.email="krishnasharma@gmail"
console.log(userone.email)
console.log(usertwo.email)