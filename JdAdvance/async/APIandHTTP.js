function getUsers(){
    fetch("https://randomuser.me/api/?results=3")
        .then((raw) => raw.json())
        .then((data) => {
        document.querySelector(".users").innerHTML = "";
        data.results.forEach((user) => {
        console.log(user)
      // Card
      const card = document.createElement("div");
      card.className =
        "w-[360px] bg-[#262626] border border-gray-700 rounded-xl p-5 flex items-center gap-4 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 transition-all";

      const img = document.createElement("img");
      img.src = user.picture.large;
      img.className =
        "w-16 h-16 rounded-full object-cover border-2 border-gray-600";

      const info = document.createElement("div");
      info.className = "flex-1";

      const name = document.createElement("h2");
      name.textContent = user.name.first + " " +  user.name.last;
      name.className = "text-white text-xl font-semibold";

      const email = document.createElement("p");
      email.textContent = user.email ;
      email.className = "text-gray-400 text-sm";

      const statusDiv = document.createElement("div");
      statusDiv.className = "flex items-center gap-2 mt-2";

      const dot = document.createElement("span");
      dot.className = "w-2.5 h-2.5 rounded-full bg-green-500";

      const status = document.createElement("span");
      status.textContent = "Active";
      status.className = "text-green-400 text-sm";

      statusDiv.appendChild(dot);
      statusDiv.appendChild(status);

      info.appendChild(name);
      info.appendChild(email);
      info.appendChild(statusDiv);

      card.appendChild(img);
      card.appendChild(info);

      document.querySelector(".users").appendChild(card);
    });
  });
}
getUsers();

let btn = document.querySelector("#refreshBtn");
btn.addEventListener("click",function(){
    getUsers();
})