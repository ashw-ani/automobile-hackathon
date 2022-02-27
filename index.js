function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 0, 999, 5000);

const account = document.querySelector(".account");
const body = document.querySelector(".quote-photo-container-wrapper");
const accountDropDown = document.querySelector(".account-dropdown");
const readMore = document.querySelector(".read-more");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");

var modalState = false;
var accountState = false;
account.addEventListener("click", function () {
  if (!accountState) {
    accountDropDown.classList.add("account-open");
  } else {
    accountDropDown.classList.remove("account-open");
  }
  accountState = !accountState;
});
body.addEventListener("click", function () {
  accountDropDown.classList.remove("account-open");
  accountState = !accountState;
});

readMore.addEventListener("click", function () {
  if (!modalState) {
    modalWrapper.classList.add("modal-wrapper-open");
    modal.classList.add("modal-open");
  }
  modalState = !modalState;
});
modalWrapper.addEventListener("click", function () {
  modalWrapper.classList.remove("modal-wrapper-open");
  modal.classList.remove("modal-open");
  modalState = !modalState;
});
