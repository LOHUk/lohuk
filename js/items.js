"use strict";

// Key word to save data at local storage
const PAGE = "NEXT_PAGE";

// Get id from HTML
let itemsContent = document.getElementById("items-content");
const pathDirection = document.getElementById("pathDirection");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
const btnPrevDisabled = document.getElementById("btn-prev-disabled");
const btnNextDisabled = document.getElementById("btn-next-disabled");
const bannerRow = document.getElementById("banner-row");

// Get data from localStorage
let page = localStorage.getItem(PAGE) ?? [];
let pageNumber = 1;
let pageSize = 15;
let pageName;

// Call Previous
btnPrev.addEventListener("click", prev);
// Call Next
btnNext.addEventListener("click", next);

// Get data to show at home
let data;
// let dataEpoxyBar = renderEpoxyBar();
// let dataEpoxyCountertops = renderEpoxyCountertops();
// let dataEpoxyDesign = renderEpoxyDesign();
// let dataEnergyPyramid = renderEnergyPyramid();
// let dataEpoxyEggs = renderEpoxyEggs();
// let dataEpoxyLamp = renderEpoxyLamp();
// let dataEpoxyStatue = renderEpoxyStatue();
// let dataEpoxyTray = renderEpoxyTray();
// let dataRobotCostumes = renderRobotCostumes();
// let dataRobotModel = renderRobotModel();
let html = "";

// Function to get data
async function renderEpoxyBar() {
  return (await fetch("../data/epoxyBar.json")).json();
}
async function renderEpoxyCountertops() {
  return (await fetch("../data/epoxyCountertops.json")).json();
}
async function renderEpoxyDesign() {
  return (await fetch("../data/epoxyDesign.json")).json();
}
async function renderEnergyPyramid() {
  return (await fetch("../data/energyPyramid.json")).json();
}
async function renderEpoxyEggs() {
  return (await fetch("../data/epoxyEggs.json")).json();
}
async function renderEpoxyLamp() {
  return (await fetch("../data/epoxyLamp.json")).json();
}
async function renderEpoxyStatue() {
  return (await fetch("../data/epoxyStatue.json")).json();
}
async function renderEpoxyTray() {
  return (await fetch("../data/epoxyTray.json")).json();
}
async function renderRobotCostumes() {
  return (await fetch("../data/robotCostumes.json")).json();
}
async function renderRobotModel() {
  return (await fetch("../data/robotModel.json")).json();
}

// Change title of page
if (page === "energyPyramid") {
  pageName = "Kim Tự Tháp Năng Lượng";
  data = renderEnergyPyramid();
} else if (page === "epoxyEggs") {
  pageName = "Trứng Epoxy";
  data = renderEpoxyEggs();
} else if (page === "epoxyLamp") {
  pageName = "Đèn Epoxy";
  data = renderEpoxyLamp();
} else if (page === "epoxyStatue") {
  pageName = "Tượng Epoxy";
  data = renderEpoxyStatue();
} else if (page === "epoxyTray") {
  pageName = "Khay / Thớt Epoxy";
  data = renderEpoxyTray();
} else if (page === "epoxyBar") {
  pageName = "Đảo Bếp / Quầy Bar Epoxy";
  data = renderEpoxyBar();
} else if (page === "epoxyCountertops") {
  pageName = "Mặt Bàn Epoxy";
  data = renderEpoxyCountertops();
} else if (page === "epoxyDesign") {
  pageName = "Thiết Kế , In Ấn Logo Quà Tặng Doanh Nghiệp Và Cá Nhân";
  data = renderEpoxyDesign();
} else if (page === "robotCostumes") {
  pageName = "Trang Phục Robot Khổng Lồ";
  data = renderRobotCostumes();
} else if (page === "robotModel") {
  pageName = "Mô Hình Robot Khổng Lồ";
  data = renderRobotModel();
}

// Init
document.title = pageName;
bannerRow.src = `../images/home/${page}.png`;
pathDirection.innerHTML = `
  <a href="../index.html"> <i class="bi bi-house-door-fill"></i> Trang Chủ </a>
  <i class="bi bi-chevron-right"></i> ${pageName}
`;
renderDatas(pageNumber);

// Render data for Page
function renderDatas(pageNumber) {
  itemsContent.innerHTML = ``;
  data.then((response) => {
    response.forEach((item, index) => {
      if (
        index >= (pageNumber - 1) * pageSize &&
        index <= pageNumber * pageSize - 1
      ) {
        renderData(item);
      }
    });

    response.length > pageNumber * pageSize
      ? btnNextDisabled.classList.remove("hidden")
      : btnNextDisabled.classList.add("hidden");

    pageNumber === 1
      ? btnPrevDisabled.classList.add("hidden")
      : btnPrevDisabled.classList.remove("hidden");

    pageNum.innerHTML = pageNumber;
  });
}

function renderData(item) {
  let product = `
  <div class="card d-block">
    <div class="cl-quickView epoxyHandmade-quickView">
      <button type="button" class="btn btn-primary quickView"
      data-bs-toggle="modal" data-bs-target="#${item.id}"
      style="background-color: #868e96; border: none" >
      <i class="bi bi-search"></i>
      </button>
      <div class="modal fade" id="${item.id}"
        data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header" style="border-bottom: none; color: rgb(70, 10, 10); margin: 0; padding: 5px;" >
              <h3>${item.title}</h3>
              <button type="button"  class="btn-close" data-bs-dismiss="modal"
              aria-label="Close" style="margin-right: 0" ></button>
            </div>
            <div class="modal-body" style="color: black; margin: 0; padding-top: 0" >
              <div class="row">
                <img style="width: 100%" src="../${item.path}" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="../${item.path}" class="card-img-top" alt="${item.title}" />
    </div>
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p style="color: red">Liên Hệ</p>
    </div>
  </div>
  `;
  itemsContent.insertAdjacentHTML("beforeend", product);
}

// Declare previous
function prev() {
  pageNumber = pageNumber - 1;
  renderDatas(pageNumber);
}

// Declare previous
function next() {
  pageNumber = pageNumber + 1;
  renderDatas(pageNumber);
}

// Fuction next page
function nextPage(page1) {
  saveToStorage(PAGE, page1);
}
