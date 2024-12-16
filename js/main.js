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

// mobile menu
// swiper-pagination-show
// mobile-menu-button-hide
const mobyleMenuButtonOpen = document.querySelector('.mobile-menu-button')
const mobilePagination = document.querySelector('.swiper-pagination')

mobyleMenuButtonOpen.addEventListener('click', () => {
  mobyleMenuButtonOpen.classList.contains('mobile-menu-button-hide') ? mobyleMenuButtonOpen.classList.remove('mobile-menu-button-hide')
  : mobyleMenuButtonOpen.classList.add('mobile-menu-button-hide')
  
  mobilePagination.classList.contains('swiper-pagination-show') ? mobilePagination.classList.remove('swiper-pagination-show') : mobilePagination.classList.add('swiper-pagination-show')
})

const mobilePaginationItems = document.querySelectorAll('.swiper-pagination-bullet')
mobilePaginationItems.forEach(paginationItem => {
  paginationItem.addEventListener('click', () => {
    mobyleMenuButtonOpen.classList.contains('mobile-menu-button-hide') ? mobyleMenuButtonOpen.classList.remove('mobile-menu-button-hide')
    : mobyleMenuButtonOpen.classList.add('mobile-menu-button-hide')
    
    mobilePagination.classList.contains('swiper-pagination-show') ? mobilePagination.classList.remove('swiper-pagination-show') : mobilePagination.classList.add('swiper-pagination-show')
  })
})