const listModalButtons = document.querySelectorAll('[data-modal-button]')
const listModalCloseButtons = document.querySelectorAll(
  '[data-modal-close-button]'
)
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

listModalCloseButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    closeModal(button)
    console.log(button)
  })
})

function closeModal(button) {
  const modal = button.closest('[data-modal-container]')
  console.log(modal)
  if (modal == null) {
    return
  }
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
