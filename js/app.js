const container = document.querySelector(".container");
const coffees = [
  {
    name: "01 A Lovely Night",
    image: "images/testpdf.pdf"
  },
  {
    name: "02 Test PDF",
    image: "images/testpdf.pdf"
  },
  {
    name: "Explicabo",
    image: "images/testpdf.pdf"
  },
  {
    name: "Rchitecto",
    image: "images/testpdf.pdf"
  },
  {
    name: " Beatae",
    image: "images/testpdf.pdf"
  },
  {
    name: " Vitae",
    image: "images/testpdf.pdf"
  },
  {
    name: "Inventore",
    image: "images/testpdf.pdf"
  },
  {
    name: "Veritatis",
    image: "images/testpdf.pdf"
  },
  {
    name: "Accusantium",
    image: "images/testpdf.pdf"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">

              <embed src=${image} class="card--avatar" />
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
