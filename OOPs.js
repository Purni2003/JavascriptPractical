//CONSTRUCTOR
// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
// }
//CreatePencil ke shared memory me kuch add krna and wo uske
//instances me bhi add jo jyega
// CreatePencil.prototype.write = function (text) {
//   let h1 = document.createElement("h1");
//   h1.textContent = text;
//   h1.style.color = this.color;
//   document.body.append(h1);
// };
// let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
// let pencil2 = new CreatePencil("Nataraj", 10, "red", "nataraj");


//CLASSES
// class CreatePencil{
//     constructor(name, company, price, color){
//          this.name = name;
//          this.company = company;
//          this.price = price;
//          this.color = color;
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }

//     erase(){
//         let h1 = document.body.querySelectorAll("h1");
//         //allow function el apne parent yaaki erase se lega
//         //p1.erase yha p1 obj h jisme erase method call kia h isliye this = p1
//         h1.forEach((el) => {
//             if(el.style.color === this.color){
//                 el.remove();
//             }
//         });
//     }
// }
// let p1 = new CreatePencil("nataraj", "nataraj", 10, "black");
// let p2 = new CreatePencil("apsara", "apsara", 15, "blue");

//EXTEND AND SUPER
// class User {
//     constructor(name, address, username, email){
//         this.name = name;
//         this.address = address;
//         this.username = username;
//         this.email = email;
//         this.role = "user";
//     }

//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = `${this.name} : ${text}`;
//         document.body.appendChild(h1);
//     }

//     checkRole(){
//         console.log(`You are a ${this.role}`);
//     }
// }

// //class user ke pass wo sb hoga jo useer ke pass hoga but hum copy nhi krna chahenge
// class Admin extends User{
//     constructor(name, address, username, email){
//         super(name, address, username, email);
//         this.role = "admin";
//     }
//     remove(){
//         document.querySelectorAll("h1").forEach(function(el){
//             el.remove();
//         });
//     }
// }

// let u1 = new User("Purnima", "Delhi", "Purni_2003", "Purnima@gmail.com");
// let u2 = new User("Priya", "Bihar", "Priya_2001", "Priy@gmail.com");
// let a1 = new Admin("admin1","india","admin_90","admin@gmail.com");


//CLASSICAL INHERITANCE === class inherit krta h class se
//PROTOTYPAL INHERITANCE === object inherit krta obj se like below
//Ek obj ki saari props/methods ko inherit kr leta h dushra obj
//jaise coffee ka sari prop arabiataCoffee ne le li and access h to use kr skta h
// let coffee = {
//     color:"dark",
//     drink: function(){
//         console.log("gut gut gut...");
//     },
// };
// let arabiataCoffee = Object.create(coffee);
// arabiataCoffee.taste = "bitter";
// arabiataCoffee.drink();

