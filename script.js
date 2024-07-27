const listModalButtons = document.querySelectorAll('[data-modal-button]')
const listModalCloseButtons = document.querySelectorAll('[modal-close-button]')
const overlay = document.querySelector('[data-modal-overlay]')

listModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    openModal(button)
  })
})

function openModal(button) {
  const modal = document.querySelector(button.dataset.modalContainerTarget)
  if (modal == null) {
    return
  }
  modal.classList.add('active')
  overlay.classList.add('active')
}
