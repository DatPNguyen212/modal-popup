const listModalButtons = document.querySelectorAll('[data-modal-button]')
const listModalCloseButtons = document.querySelectorAll('[modal-close-button]')

listModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modal = document.querySelector(button.dataset.modalContainerTarget)
    openModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) {
    return
  }
  modal.classList.add('active')
}
