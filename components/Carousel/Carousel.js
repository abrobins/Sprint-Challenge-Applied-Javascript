/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const addCarousel = document.querySelector(".carousel-container");
addCarousel.appendChild(createCarousel());
console.log(createCarousel());
function createCarousel() {
  const newCarousel = document.createElement("div");
  newCarousel.classList.add("carousel");
  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  leftButton.textContent = "<";
  const mtnImg = document.createElement("img");
  mtnImg.src = "./assets/carousel/mountains.jpeg";
  const compImg = document.createElement("img");
  compImg.src = "./assets/carousel/computer.jpeg";
  const treeImg = document.createElement("img");
  treeImg.src = "./assets/carousel/trees.jpeg";
  const turnImg = document.createElement("img");
  turnImg.src = "./assets/carousel/turntable.jpeg";
  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  rightButton.textContent = ">";
  // rightButton.addEventListener("click"), e => {};

  // append items
  newCarousel.appendChild(leftButton);
  newCarousel.appendChild(mtnImg);
  newCarousel.appendChild(compImg);
  newCarousel.appendChild(treeImg);
  newCarousel.appendChild(turnImg);
  newCarousel.appendChild(rightButton);
  return newCarousel;
}
