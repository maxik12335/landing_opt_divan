const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
const buttonsModalOpen = document.querySelectorAll('.page__modal-open')

buttonsModalOpen.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.contains('modal_show') ? "" : modal.classList.add('modal_show')
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.contains('modal_show') ? modal.classList.remove('modal_show') : ""
})