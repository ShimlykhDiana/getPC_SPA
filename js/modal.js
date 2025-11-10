const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelector(".modal__button");
const closeModal = document.querySelector(".modal__close");
const buttonOrder = document.querySelector(".course__button");

buttonModal.addEventListener("click", () => {
  modalWindow.style.display = "flex";
  //   body.classList.add("noscroll");
});
buttonOrder.addEventListener("click", () => {
  modalWindow.style.display = "flex";
});

modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal__inner");

  if (!isModal) {
    modalWindow.style.display = "none";
  }
  body.classList.remove("noscroll");
});

closeModal.addEventListener("click", () => {
  modalWindow.style.display = "none";
});

//inline styles - те которые мы добавляем в теге html элемента, пример у нас в buttonModal
