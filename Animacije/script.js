let textTag = document.querySelector(".section1 h1");
let text = textTag.textContent;

let splittedText = text.split("");

textTag.innerHTML = "";

for (let i = 0; i < splittedText.length; i++) {
  if (splittedText[i] === " ") {
    splittedText[i] = "&nbsp;";
  }

  textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let spans = textTag.querySelectorAll("span");

let k = 0;
let interval = setInterval(() => {
  let singleSpan = spans[k];

  singleSpan.className = "fadeMove";

  k++;

  if (k === spans.length) {
    clearInterval(interval);
  }
}, 60);

// Border linija sa dodavanjem plusa i minusa

let border = document.querySelector(".border-line");
let leftAnimation = document.querySelector(".left-button");
let rightAnimation = document.querySelector(".right-button");

let animationWidth = 0;

let plusMove = () => {
  animationWidth += 1.5;
  border.style.width = animationWidth + "%";

  if (animationWidth >= 100) {
    animationWidth = 100;
  }
};

let minusMove = () => {
  animationWidth -= 1.5;
  border.style.width = animationWidth + "%";

  if (animationWidth <= 0) {
    animationWidth = 0;
  }
};

rightAnimation.addEventListener("click", plusMove);
leftAnimation.addEventListener("click", minusMove);

// Animacija slika na button onclick

let pictureButton = document.querySelector(".picture-button");
let leftImage = document.querySelector(".slideFromLeft");
let rightImage = document.querySelector(".slideFromRight");
let sectionForAnimation = document.querySelector(".section2 .images");

const imageAnimation = () => {
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top; // udaljenost slika od browsera u px
  let screenPosition = window.innerHeight; // pozicija slika u px prema visini

  if (sectionPosition < screenPosition) {
    leftImage.classList.add("animated");
    rightImage.classList.add("animated");
  }
};

pictureButton.addEventListener("click", imageAnimation);
