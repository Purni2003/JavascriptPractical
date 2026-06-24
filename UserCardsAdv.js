//Object
let form = document.querySelector("#userForm");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  //this funcion works like a controller
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    //this yha obj(userManager) h uske user me detail push kr do
    this.users.push({
      id: Date.now(),
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  //show user
  renderUi: function () {
    //agar clear nhi krenge to wo array me jo h unka firse card bna dega
    document.querySelector("#cardContainer").innerHTML = "";
    this.users.forEach((user)=> {
      const card = document.createElement("div");
      card.className =
        "w-72 bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center";

      card.dataset.id = user.id;
      //Image
      const img = document.createElement("img");
      img.src = user.photo;
      img.className =
        "w-20 h-20 rounded-full object-cover mx-auto border-2 border-zinc-700";

      const heading = document.createElement("h3");
      heading.className = "mt-4 text-xl font-semibold";
      heading.textContent = user.username;

      const role = document.createElement("p");
      role.className = "text-zinc-400 text-sm mt-1";
      role.textContent = user.role;

      const bio = document.createElement("p");
      bio.className = "text-zinc-500 text-sm mt-3";
      bio.textContent = user.bio;

      card.appendChild(img);
      card.appendChild(heading);
      card.appendChild(role);
      card.appendChild(bio);

      document.querySelector("#cardContainer").appendChild(card);

      card.addEventListener("click", () => {
        this.removeUser(user.id);
      });
    });
  },
  removeUser: function (id) {
    this.users = this.users.filter((user) => user.id != id);
    this.renderUi();
  },
};
//jb bhi code chlega sbse pehle init chl jyega yhi kaam higa pehle
userManager.init();
