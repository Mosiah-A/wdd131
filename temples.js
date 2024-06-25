 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  
    const currentYear = new Date().getFullYear();

    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = `© ${currentYear}`;

    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});

