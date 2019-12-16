// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

addHeader = document.querySelector(".header-container");
addHeader.appendChild(Header());

function Header() {
  const newHeader = document.createElement("div");
  const dateSpan = document.createElement("span");
  const newH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  newHeader.classList.add("header");
  dateSpan.classList.add("date");
  dateSpan.textContent = "MARCH 28, 2019";
  newH1.textContent = "Lambda Times";
  tempSpan.classList.add("temp");
  tempSpan.textContent = "98°";

  newHeader.appendChild(dateSpan);
  newHeader.appendChild(newH1);
  newHeader.appendChild(tempSpan);

  return newHeader;
}
