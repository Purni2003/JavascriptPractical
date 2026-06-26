//Execution Context(Abstract h(jise hum chho nhi skte bs imagine kr kste h)) ---
//ye ek hypothetical synerio , ek dabba h , js function dekhte hi 2 phase bnati h
//ek memory creation phase --ise saare variables apni apni memory lete h and dushra execution phase jaha caode chlta h


//CREATE TOASTER
// function createToaster(config) {
//   return function (str) {
//     let parent = document.querySelector(".parent");
//     parent.classList.add(
//       "flex",
//       "flex-col",
//       config.positionX === "right" ? "items-end" : "items-start",
//     );
//     let div = document.createElement("div");
//     parent.appendChild(div);
//     div.textContent = str;
//     div.className = `inline-block 
//     ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
    
    
//     if (config.positionX !== "left" || config.positionY !== "top") {
//       parent.classList.add(
//         "fixed",
//         config.positionX === "right" ? "right-5" : "left-5",
//         config.positionY === "bottom" ? "bottom-5" : "top-5",
//       );
//     }

//     setTimeout(function () {
//       document.querySelector(".parent").removeChild(div);
//     }, config.duration * 1000);
//   };
// }
// //inner function store in toaster aafter calling outer func
// let toaster = createToaster({
//   positionX: "left",
//   positionY: "bottom",
//   theme: "light",
//   duration: 3,
// });
// //inner function call
// toaster("Download Now!");
// //add notifcation after 2sec
// setTimeout(function () {
//   toaster("This is dummy notification!");
// }, 2000);

//THIS KEYWORD 
//global me this ki value window h
// console.log(this);


//function me this ki value window h
// function abcd(){
//   console.log(this);
// }
// abcd();


//method(obj me function) me this ki value obj hoti h but
//method with es5 fnc - obj
//method with es6 arrow fnc - window
//es5 function inside es5 method - window
//arrow function inside es5 method - obj
// let obj = {
//   name: "Purnima",
//   sayName: function(){
//     console.log(this.name);
//   },
// };
// obj.sayName();


//event handler me this ki value wo hota h jis pr event
//handler lga hota h jaise niche wale me h1
// document.querySelector("h1").addEventListener("click",function(){
//   console.log((this.style.color = "red"));
// });


//class me this  ki value 
//blank obj hoti h jb new keyword ke saath call krte h


//call,apply,bind----fucntion ko call krte time app set kr skte 
//h ki this ki value kya hogi
// let obj = {
//   name: "Purnima",
// };
// function abcd(){
//   console.log(this.name);
// }
// abcd.call(obj);
 
//APPLICATION
