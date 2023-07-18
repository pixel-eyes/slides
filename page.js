//this is a data for holding which page we're on
let pageNumber = 0;

//have the content for these pages
const pages = [
  {
    copy: "Japanese culture's biggest fan",
    background: "#edc7a9",
    circle: "#3e78ed",
  },

  { copy: "a foodie", background: "#a1fffe", circle: "#e34a47" },
  {
    copy: "learning front-end development",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: 'letting you <a href="pdf.pdf">download her PDF</a>',
    background: "#faffb8",
    circle: "#b472e6",
  },
];

// make a next function to increase the pageNumber
const nextTag = document.querySelector("footer img.next");
const previousTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

//make a previous function to decrease the pageNumber
const next = function () {
  pageNumber = pageNumber + 1;
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
  updateSection();
};

// make a previous function to decrease the pageNumber
const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateSection();
};

// pick a random slide
const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);

  updateSection();
};

// this will update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

// on click of nextTag icon, run this
nextTag.addEventListener("click", function () {
  next();
});

previousTag.addEventListener("click", function () {
  previous();
});

// on click of randomTag icon, run this
randomTag.addEventListener("click", function () {
  random();
});

//when a user presses a key, check for arrow left or right
// and do next or pre correctly
document.addEventListener("keyup", function (event) {
  console.log(event);
});
