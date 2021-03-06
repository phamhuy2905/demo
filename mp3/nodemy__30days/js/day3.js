const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal-btn");
const iconCloseModal = document.querySelector(".modal__header i");
const buttonCloseModal = document.querySelector(".modal__footer button");
const modal__inner = document.querySelector('.modal__inner')

function toggleModal() {
  modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});
