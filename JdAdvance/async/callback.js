//LINE BY LINE CHLE WO SYNC CODE
//JB CHLNE KE LIYE READY JO JAAYE TB CHLE WO ASYNC CODE

//CALLBACK
// function Profile(username, cb){
//     console.log("Fetching profile data...");
//     setTimeout(() => {
//         cb({_id : 123,username,age:23,email: "huihui@gmail.com"});
//     }, 2000);
// }

// function Allpost(id, cb){
//     console.log("Fetching all data...");
//     setTimeout(() => {
//         cb({_id : id, posts:["hey","hello"]});
//     }, 3000);
// }

// Profile("Purnima", function (data) {
//     console.log(data);
//     Allpost(data._id, function (post){
//         console.log(post);
//     });
// })

//Nested callbacks ko hum callback hell keh skte h

//PROMISES
// let pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn > 5) res("resolved with " + rn);
//     else rej("reject with " + rn);
//   }, 1000);
// });
// pr.then(function (val) {
//   console.log(val);
// }).catch(function (val) {
//   console.log(val);
// });

//ASYNC/AWAIT --hume ye then and catch se bcha leta h clean way h
// async function abcd() {
//   try {
//     let val = await pr;
//     console.log(val);
//   } catch (err) {
//     console.log(err);
//   }
// }
// abcd();


