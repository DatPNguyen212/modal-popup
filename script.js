const listModalButtons = document.querySelectorAll('[data-modal-button]')
const listModalCloseButtons = document.querySelectorAll('[modal-close-button]')

listModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modal = document.querySelector(button.dataset.modalContainerTarget)
    openModal(modal)
  })
})

function openModal(modal) {
  console.log(modal)
  modal.classList.add('active')
}
