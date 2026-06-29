//Module pattern me jo bhi bnayenge iife ke andar bnayenge
//usme likha sb private ho jata h or usme se return krna pdta h ek obj
//wo obj us function variable eme aa jta h and aap use access kr skte h
//MODULE PATTERN --- immeditely invoked function likhte h
// let Bank = (function(){
//     //cannot access outside iife, everything in iife are private
//    let bankbalance = 12000;

//    function checkBalance(){
//     console.log(bankbalance);
//    }

//    function withdraw(val){
//     bankbalance -= val;
//     console.log(bankbalance);
//    }

//     return {
//         checkBalance,
//         withdraw,
//     };
// })();

//REVEALING MODULE PATTERN
// let Bank = (function(){
//     //cannot access outside iife, everything in iife are private
//    let bankbalance = 12000;

//    function checkBalance(){
//     console.log(bankbalance);
//    }

//    function withdraw(val){
//     bankbalance -= val;
//     console.log(bankbalance);
//    }

//     return {
//         //revealing me hum funciton ka name change krke bhej skte but only for accessing
//         check: checkBalance,
//         draw: withdraw,
//     };
// })();

// FACTORY FUNCTION PATTERN
// function createProduct(name,price){
//     let stock = 10;
//     return{
//         name,
//         price,
//         buy(qty){
//             if(qty<=stock){
//                 stock-=qty;
//                 console.log(`${qty} pieces booked, ${stock} pieces left.`);
//             }
//             else{
//                 console.error(`We only have ${stock} pieces left. `)
//             }
//         },
//         refill(qty){
//             stock+=qty;
//             console.log(`Refilled the stock - ${stock} pieces now.`)
//         },
//     };
// }
// let iPhone = createProduct("iPhone" , 70000);
// let Kitkat = createProduct("kitkat", 10);
// iPhone.buy(5);


//OBSERVER PATTERN
class YouTubeChannel {
    constructor(){
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update(`You have subscribed the channel.`);
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub!=user);
        user.update(`You have Unsubscribed the channel.`);
    }

    //video upload ho gia sbko notify kro
    notify(message){
        this.subscribers.forEach((sub) => sub.update(message));
    }
};

class user {
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(`${this.name},${data}`);
    }
};

let sheryians = new YouTubeChannel();
let user1 = new user("Purnima");
sheryians.subscribe(user1);
sheryians.notify("We are closing the channels.");