//Debounce --- kuch krte krte aap jb rukte h or aapko usme
//kuch action perform krana h to debouce kaam aayega
//Debounce is a technique to limit the rate at which a function is executed.

//debounce 2 cheez leta h 1 function jo ki delay ke baad execute hoga or 2nd delay time jo ki function ko execute krne se pehle wait krta h
// function debounce(fnc,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fnc(...args);
//         }, delay);
//     };
// }
// let inp = document.querySelector("#input");
// inp.addEventListener("input", debounce(function() {
//     console.log("hey");
// }, 300)
// );

//Throttle --- interval par chalunga. action agar hota rha
//and apne ek interval btaya to utne interval me aapka event chlega

function throttle(fnc, delay) {
  let timer = 0;
  return function (...args) {
    let now = Date.now();
    if(now - timer >= delay){
        timer  = now;
        fnc(...args);
    }
  };
}
let inp = document.querySelector("#input");
inp.addEventListener(
  "input",
  throttle(function () {
    console.log("hey");
  }, 1000),
);
