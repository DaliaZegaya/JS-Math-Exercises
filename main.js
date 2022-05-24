// function printRandomNumber () {
//     var rnd = (Math.floor (Math.random()*10))
//     console.log (rnd)
// }
// printRandomNumber ()

// function returnRandomNumber (number) {
//     return Math.floor (Math.random()*number)

// }
// returnRandomNumber (8)

// function randomNumber (num) {
//     var rnd = Math.floor (Math.random()*10)
//     if (rnd == num) {
//         console.log ("Excellent!")
//     }
//     else if (rnd != num) {
//         console.log ("Too bad :(")
//     }


// }
// randomNumber (+prompt("number"))

// function arrayFunction () {
//     var myArray = []
//     for (var i=0; myArray.length<10; i++) {
//         myArray.push (Math.floor (Math.random()*100)) 

//     }
//     console.log (myArray)
// }
// arrayFunction ()

// function someFunction (number) {
//     var rnd = Math.floor (Math.random()*10)
//     var max= Math.max (number, rnd)
//     console.log (max)
//     return max;

// }
// someFunction (+prompt("your number"))

// function userFunction () {
//     var min = 1000000000000
//     for (var i=0; i<5;i++) {
//         var num = +prompt ("your number")
//         min= Math.min (num, min)

//     }
//     console.log (min)
// }
// userFunction ()


// function exercise42 () {
//     var userNum= +prompt ("number")
//     var rnd = Math.floor (Math.random()*100)
//     if (userNum%2==0) {
//         var minNum= Math.min (rnd,userNum)
//         return console.log (minNum)
//     }
//     else if (userNum%2==1) {
//         var maxNum= Math.max (rnd,userNum)
//         return console.log (maxNum)
//     }
// }
// exercise42 ()

// function exercise43 () {
//     var myArray= []
//     myArray.length= Math.floor(Math.random()*365)
//     var rnd= Math.floor(Math.random()*874)
//     for (var i=0; i<myArray.length;i++) {
//         myArray.puh(rnd)
//         console.log (myArray)
        
//     }
// }
// exercise43()

// function exercise44 (myArray) {
//     var rnd= Math.floor (Math.random()*myArray.length)
//     console.log (myArray[rnd]);

// }
// exercise44 ([5,4,8,5,9,6,5,4,8,5,2])

// function exercise45 () {
//     var userName= prompt ("your name")
//     var rnd= Math.floor (Math.random()*10)
//     var newString= userName.replace(userName.charAt(rnd), userName[rnd].toUpperCase())
//     console.log (newString)

// }
// exercise45 ()

// function exercise46 () {
//     var name1= prompt ("name1")
//     var name2= prompt ("name2")
//     var age1= +prompt ("age1")
//     var age2= +prompt ("age2")
//     var rnd= Math.floor (Math.random()*10)
//     if (name1[0]==name2[0]) {
//         console.log (rnd)
//     }
//     if (name1[name1.length-1]==name2[name2.length-1]) {
//         console.log ("same letter"+name1[name1.length-1])
//     }
//     else {
//         console.log("first age"+age1,"second age"+age2);
//     }
    
// }
// exercise46 ()

// function exercise47 () {
//     var userText= prompt ("your text")
//     var rnd= Math.floor (Math.random()*6)
//     console.log (userText.substring(0,rnd))

// }
// exercise47()

// function exercise48 () {
//     var userNum= +prompt("enter number")
//     var rnd= Math.floor(Math.random()*userNum)
//     if (userNum%3==0) {
//         for (var i=0; i<rnd;i++) {
//             console.log(rnd);
//         }
//     }
//     else {
//         console.log(rnd*Math.PI);

//     }
// }
// exercise48()
