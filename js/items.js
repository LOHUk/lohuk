"use strict";

// Key word to save data at local storage
const PAGE = "NEXT_PAGE";

const pathDirection = document.getElementById("pathDirection");

// Get data from localStorage
let page = localStorage.getItem(PAGE) ?? [];

// Change title of page
if (page === "epoxyEggs") {
  page = "Epoxy Eggs";
} else if (page === "epoxyFurniture") {
  page = "Epoxy Furniture";
} else if (page === "epoxyGifts") {
  page = "Epoxy Gifts";
} else if (page === "uniqueCostumes") {
  page = "Unique Costumes";
}
document.title = page;
pathDirection.innerHTML = `
  <a href="../index.html"> <i class="bi bi-house-door-fill"></i> Trang Chủ </a>
  <i class="bi bi-chevron-right"></i> ${page}
`;
