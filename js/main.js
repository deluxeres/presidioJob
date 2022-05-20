function openTabs(evt, cityName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const img = document.getElementById("img");

document.getElementById("accord1").addEventListener("click", () => {
  img.setAttribute("src", "assets/accord1.png");
});

document.getElementById("accord2").addEventListener("click", () => {
  img.setAttribute("src", "assets/accord2.png");
});

document.getElementById("accord3").addEventListener("click", () => {
  img.setAttribute("src", "assets/accord3.png");
});

const accords = [...document.getElementById("accordion-1").children];

accords.forEach((el, _, arr) => {
  el.addEventListener("click", () => {
    arr.forEach((el) => el.classList.remove("accordion__item_show"));
    el.classList.add("accordion__item_show");
  });
});

console.log(accords);

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const mobileMenu = document.getElementById("mobileMenu");

document.getElementById("menuBurg").addEventListener("click", () => {
  mobileMenu.classList.toggle("activeMobile");
});
