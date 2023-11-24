"use strict";

// Key word to save data at local storage
const PAGE = "NEXT_PAGE";

// Get id from HTML
let productDetailEpoxyHandmade = document.getElementById(
  "productDetail-epoxyHandmade"
);
let productDetailEpoxyFurniture = document.getElementById(
  "productDetail-epoxyFurniture"
);
let productDetailEpoxyGifts = document.getElementById(
  "productDetail-epoxyGifts"
);
let productDetailUniqueCostumes = document.getElementById(
  "productDetail-uniqueCostumes"
);

// Get data to show at home
let dataEpoxyHandmade = renderEpoxyHandmade();
let dataEpoxyFurniture = renderEpoxyFurniture();
let dataEpoxyGifts = renderEpoxyGifts();
let dataUniqueCostumes = renderUniqueCostumes();
let html = "";

// Function to get data
async function renderEpoxyHandmade() {
  return (await fetch("../data/epoxyHandmade.json")).json();
}
async function renderEpoxyFurniture() {
  return (await fetch("../data/epoxyFurniture.json")).json();
}
async function renderEpoxyGifts() {
  return (await fetch("../data/epoxyGifts.json")).json();
}
async function renderUniqueCostumes() {
  return (await fetch("../data/uniqueCostumes.json")).json();
}

// Init
dataEpoxyHandmade.then((data) => {
  productDetailEpoxyHandmade.innerHTML = ``;
  data.forEach((item) => {
    html += `
  <div class="card d-block">
  <div class="cl-quickView" href="#">
    <button
      type="button"
      class="btn btn-primary quickView"
      data-bs-toggle="modal"
      data-bs-target="#${item.id}"
      style="background-color: #868e96; border: none"
    >
      <i class="bi bi-search"></i>
    </button>
    <div
      class="modal fade"
      id="${item.id}"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header"
            style="
              border-bottom: none;
              color: black;
              margin: 0;
              padding: 5px;
            "
          >
            <h3>${item.title}</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="margin-right: 0"
            ></button>
          </div>
          <div
            class="modal-body"
            style="color: black; margin: 0; padding-top: 0"
          >
            <img
              style="width: 100%"
              src="${item.path}"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      src="${item.path}"
      class="card-img-top"
      alt="..."
    />
  </div>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <a href="#" class="btn btn-primary">Xem chi tiết</a>
  </div>
</div>
  `;
  });
  productDetailEpoxyHandmade.innerHTML = html;
  html = "";
});

dataEpoxyFurniture.then((data) => {
  productDetailEpoxyFurniture.innerHTML = ``;
  data.forEach((item) => {
    html += `
  <div class="card d-block">
  <div class="cl-quickView" href="#">
    <button
      type="button"
      class="btn btn-primary quickView"
      data-bs-toggle="modal"
      data-bs-target="#${item.id}"
      style="background-color: #868e96; border: none"
    >
      <i class="bi bi-search"></i>
    </button>
    <div
      class="modal fade"
      id="${item.id}"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header"
            style="
              border-bottom: none;
              color: black;
              margin: 0;
              padding: 5px;
            "
          >
            <h3>${item.title}</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="margin-right: 0"
            ></button>
          </div>
          <div
            class="modal-body"
            style="color: black; margin: 0; padding-top: 0"
          >
            <img
              style="width: 100%"
              src="${item.path}"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      src="${item.path}"
      class="card-img-top"
      alt="..."
    />
  </div>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <a href="#" class="btn btn-primary">Xem chi tiết</a>
  </div>
</div>
  `;
  });
  productDetailEpoxyFurniture.innerHTML = html;
  html = "";
});

dataEpoxyGifts.then((data) => {
  productDetailEpoxyGifts.innerHTML = ``;
  data.forEach((item) => {
    html += `
  <div class="card d-block">
  <div class="cl-quickView" href="#">
    <button
      type="button"
      class="btn btn-primary quickView"
      data-bs-toggle="modal"
      data-bs-target="#${item.id}"
      style="background-color: #868e96; border: none"
    >
      <i class="bi bi-search"></i>
    </button>
    <div
      class="modal fade"
      id="${item.id}"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header"
            style="
              border-bottom: none;
              color: black;
              margin: 0;
              padding: 5px;
            "
          >
            <h3>${item.title}</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="margin-right: 0"
            ></button>
          </div>
          <div
            class="modal-body"
            style="color: black; margin: 0; padding-top: 0"
          >
            <img
              style="width: 100%"
              src="${item.path}"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      src="${item.path}"
      class="card-img-top"
      alt="..."
    />
  </div>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <a href="#" class="btn btn-primary">Xem chi tiết</a>
  </div>
</div>
  `;
  });
  productDetailEpoxyGifts.innerHTML = html;
  html = "";
});

dataUniqueCostumes.then((data) => {
  productDetailUniqueCostumes.innerHTML = ``;
  data.forEach((item) => {
    html += `
  <div class="card d-block">
  <div class="cl-quickView" href="#">
    <button
      type="button"
      class="btn btn-primary quickView"
      data-bs-toggle="modal"
      data-bs-target="#${item.id}"
      style="background-color: #868e96; border: none"
    >
      <i class="bi bi-search"></i>
    </button>
    <div
      class="modal fade"
      id="${item.id}"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header"
            style="
              border-bottom: none;
              color: black;
              margin: 0;
              padding: 5px;
            "
          >
            <h3>${item.title}</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="margin-right: 0"
            ></button>
          </div>
          <div
            class="modal-body"
            style="color: black; margin: 0; padding-top: 0"
          >
            <img
              style="width: 100%"
              src="${item.path}"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      src="${item.path}"
      class="card-img-top"
      alt="..."
    />
  </div>
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <a href="#" class="btn btn-primary">Xem chi tiết</a>
  </div>
</div>
  `;
  });
  productDetailUniqueCostumes.innerHTML = html;
  html = "";
});

// Fuction next page
function nextPage(page) {
  saveToStorage(PAGE, page);
}
