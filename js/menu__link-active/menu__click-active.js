const headerMenuLinkElements = document.querySelectorAll('.header__menu-link')

headerMenuLinkElements.forEach((link) => {

   link.addEventListener('click', () => {
      headerMenuLinkElements.forEach((link) => {
         link.classList.remove('_active-link')
      })

      link.classList.add('_active-link')
   })
})


export { headerMenuLinkElements }