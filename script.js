// const lbtn = document.querySelector(".lbutton");
// const rbtn = document.querySelector(".rbutton");
const btn = document.querySelectorAll(".buttons");
const slides = document.querySelectorAll(".slides");
const dotsContainer = document.querySelector(".dots");
let currSlide = 0;
const goToSlide = function (slide) {
  //   console.log(slide);
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

const nextSlide = () => {
  if (currSlide === slides.length - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
  // goToSlide(currSlide);
  activateDots(currSlide);
};
const prevSlide = () => {
  if (currSlide === 0) {
    currSlide = slides.length - 1;
  } else {
    currSlide--;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
  activateDots(currSlide);
};
const createDots = () => {
  slides.forEach((s, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slides="${i}"></button>`
    );
  });
};
createDots();
const activateDots = (slide) => {
  //remove all selected dots
  //   dotsContainer.forEach((el, i) => {
  //     console.log(el, i);
  //   });
  //   slides.forEach((el, i) => {
  //     document
  //       .querySelector(".dots")
  //       .target.classList.contains("dots__dot").style.opacity = "1";
  //   });
  document.querySelectorAll(".dots__dot").forEach((dot, i) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slides="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDots(0);
btn.forEach((el) => {
  el.addEventListener("click", function (e) {
    // console.log("Clicked", e.target);
    if (e.target.classList.contains("rbutton")) {
      console.log("right clicked");
      nextSlide();
      //   activateDots();
    } else if (e.target.classList.contains("lbutton")) {
      console.log("left clicked");
      prevSlide();
      activateDots();
    }
  });
  dotsContainer.addEventListener("click", function (e) {
    // console.log("clicked", e.target);
    if (e.target.classList.contains("dots__dot")) {
      //   console.log("ok")
      const { slides } = e.target.dataset;
      activateDots(slides);
      goToSlide(slides);
    }
  });
});

// slides.forEach((el, i) => {
//   console.log(el, i);
// });
