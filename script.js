const titles = document.querySelectorAll('.questions dt');
const firstTitle = titles[0];
firstTitle.classList.add('active');
firstTitle.nextElementSibling.classList.add('active')

function showInfo() {
  this.classList.toggle('active')
  this.nextElementSibling.classList.toggle('active');
}

titles.forEach((title) => {
  title.addEventListener('click', showInfo)
})

