const navList = document.getElementById("nav-list");
const content = document.querySelector(".content");

content.addEventListener("click", (e) => {
  if (e.target == content) {
    navList.classList.remove("active");
    content.classList.remove("active");
    burger.classList.remove("active");
  }
});

burger.addEventListener("click", (e) => {
  // console.log(e.target);
  navList.classList.toggle("active");
  content.classList.toggle("active");
  burger.classList.toggle("active");
});

// media image

const mediaTablet = window.matchMedia("(min-width:768px)");

function changeImage(mediaQuery) {
  console.log(mediaQuery.matches);
  if (mediaQuery.matches) {
    heroImage.src = "./assets/images/image-web-3-desktop.jpg";
  } else {
    heroImage.src = "./assets/images/image-web-3-mobile.jpg";
  }
}

changeImage(mediaTablet);
mediaTablet.addEventListener("change", changeImage);
