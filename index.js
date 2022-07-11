//Menu
const nav = document.querySelector("nav");

const dropMenu = document.getElementsByClassName("dropMenu");
var i;

for (i = 0; i < dropMenu.length; i++) {
  dropMenu[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      nav.style.marginBottom = "0px";
    } else {
      content.style.display = "block";
      nav.style.marginBottom = "70px";
    }
  });
}

//Total
const donutButton = document.images["bt-donut"];
const donutNumber = document.querySelector(".ct-donut");

donutButton.addEventListener("click", addDonut);
var donutCount = 0;

function addDonut() {
  donutCount += Math.pow(1.2, clickMultiplierCount);
  donutNumber.innerText = numberWithCommas(Math.round(donutCount));
}

function retrieveDonutCount() {
  return donutCount;
}

//Purchases
const purchaseAutoClicker = document.querySelector("#purchase-auto-clicker");
const autoClickerPriceEach = document.querySelector("#auto-clicker-price");
const autoClickersTotalPurchased = document.querySelector("#auto-clickers-total");

purchaseAutoClicker.addEventListener("click", upgradeAutoClicker);

var autoClickerPrice = 100;
var autoClickerCount = 0;

function upgradeAutoClicker() {
  if (donutCount >= autoClickerPrice) {
    donutCount -= autoClickerPrice;
    autoClickerCount += 1;
    autoClickerPrice = Math.round(autoClickerPrice * 1.10);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
    autoClickerPriceEach.innerText = numberWithCommas(autoClickerPrice);
    autoClickersTotalPurchased.innerText = numberWithCommas(autoClickerCount);
    if (autoClickerCount <= 1) {
      activateAutoClickers();
    }
  }
}

function retrieveAutoClickerCount() {
  return autoClickerCount;
}

function activateAutoClickers() {
  setInterval(function () {
    donutCount += autoClickerCount * Math.pow(1.2, clickMultiplierCount);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
  }, 1000);

}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const purchaseClickMultipliers = document.querySelector("#purchase-click-multiplier");
const clickMultiplierPriceEach = document.querySelector("#click-multiplier-price");
const clickMultiplierTotal = document.querySelector("#click-multiplier");

purchaseClickMultipliers.addEventListener("click", upgradeClickMultiplier);

var clickMultiplierPrice = 10;
var clickMultiplierCount = 0;

function upgradeClickMultiplier() {
  if (donutCount >= clickMultiplierPrice) {
    donutCount -= clickMultiplierPrice;
    clickMultiplierCount += 1;
    clickMultiplierPrice = Math.round(clickMultiplierPrice * 1.1);
    donutNumber.innerText = numberWithCommas(Math.round(donutCount));
    clickMultiplierPriceEach.innerText = numberWithCommas(clickMultiplierPrice);
    clickMultiplierTotal.innerText = numberWithCommas(clickMultiplierCount);
  }
}

//Reset
const resetButton = document.querySelector("#reset-game-button");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  location.reload();
}