const customerGrid = document.getElementById('customer_grid');

customerGrid.addEventListener('click', e => {
  const expandedCell = document.querySelector('.item--expand');
  expandedCell.classList.remove('item--expand');
  e.target.classList.add('item--expand');
})