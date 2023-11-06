const container = document.querySelector(".container");
const coffees = [
  {
    name: "01 A Lovely Night",
    image: "images/test.png"
  },
  {
    name: "02 Test PDF",
    image: "images/test.png"
  },
  {
    name: "03 Test PDF",
    image: "images/test.png"
  },
  {
    name: "04 Test PDF",
    image: "images/test.png"
  },
  {
    name: "05 Test PDF",
    image: "images/test.png"
  },
  {
    name: "06 Test PDF",
    image: "images/test.png"
  },
  {
    name: "07 Test PDF",
    image: "images/test.png"
  },
  {
    name: "08 Test PDF",
    image: "images/test.png"
  },
  {
    name: "09 Test PDF",
    image: "images/test.png"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
              <img class="card--avatar" src=${image} />


                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Play</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
