const navToggler = document.getElementById('navbar_toggler');
const mobileBg = document.getElementById('mobile_bg');
const mobileNav = document.getElementById('mobile_nav')
const customerGrid = document.getElementById('customer_grid');


navToggler.addEventListener('click', e => {
  console.log('hello')
  e.target.classList.toggle('navbar-toggler-icon--down');
  mobileBg.classList.toggle('mobile-bg--open');
  mobileNav.classList.toggle('mobile-nav--open');
});

customerGrid.addEventListener('click', e => {
  console.log('hello')
  if (!e.target.classList.contains('item--expand')) {
    const expandedCell = document.querySelector('.item--expand');
    expandedCell.classList.remove('item--expand');
    e.target.classList.add('item--expand');
  }
});