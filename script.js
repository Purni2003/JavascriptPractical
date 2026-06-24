// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");
// btn.addEventListener("click", function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change",function(det){
//     let file = det.target.files[0]
//     if(file){
//     btn.textContent= (file.name);
//     }
// });

//FormHANDLING
// let main = document.querySelector("#main");
// let form=document.querySelector("form");
// let inputs = document.querySelectorAll("input");

// form.addEventListener("submit",function(det){
//     det.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src",inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;
//     profile.appendChild(img);
//     card.appendChild(profile);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type != "submit"){
//         inp.value = "";
//         }
//     })
// });


//MOUSEOVER AND MOUSEOUT
// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor = "Yellow";
// });
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor = "red";
// });

//MOUSEMOVE
// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove",function(det){
//     abcd.style.top = det.clientY + "px";
//     abcd.style.left = det.clientX + "px";
// });

//KEYDOWN
// let inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function(){
//     console.log("user is typing");
// });

//event bubbling
// document.querySelector("#nav")
// .addEventListener("click",function(){
//     alert("clicked")
// })
// let ul = document.querySelector("ul");
// ul.addEventListener("click", function(det){
//     det.target.classList.toggle("lt");
// });


//Live ch counter
// let inp = document.querySelector("input");
// let span = document.querySelector("span");
// inp.addEventListener("input", function(){
//     let left = 20-inp.value.length;
//     span.textContent = left;
//     if(left < 0){
//     span.style.color = "red";}
//     else{
//     span.style.color = "black";
//     }
// });
