const profiles = [
  {
    name: "Ajit",
    age: 25,
    location: "Berhampur, Odisha",
    image: "babul.jpg"
  },
  {
    name: "Papu",
    age: 21,
    location: "Lanjipalli, Odisha",
    image: "prabin.jpg"
  },
  {
    name: "Pradipta",
    age: 21,
    location: "Bhanjanagar, Odisha",
    image: "mangu.jpg"
  },
  {
    name: "Subhankar",
    age: 24,
    location: "Gopalpur, Odisha",
    image: "subu.jpg"
  },
  {
    name: "Omm",
    age: 20,
    location: "Lathi, Odisha",
    image: "omm.jpg"
    }
];

let currentIndex = 0;

function showProfile() {
  if (currentIndex >= profiles.length) {
    document.getElementById("profile-card").innerHTML = `<p>No more profiles!</p>`;
    document.querySelector(".buttons").style.display = "none";
    return;
  }

  const user = profiles[currentIndex];
  document.getElementById("profile-card").innerHTML = `
    <img src="${user.image}" alt="${user.name}">
    <h2>${user.name}, ${user.age}</h2>
    <p>${user.location}</p>
  `;
  document.getElementById("status").innerText = "";
}

function nextProfile() {
  currentIndex++;
  showProfile();
}

function likeProfile() {
  const user = profiles[currentIndex];
  document.getElementById("status").innerText = `You liked ${user.name}! ❤️`;
  setTimeout(() => {
    nextProfile();
  }, 800);
}

window.onload = showProfile;