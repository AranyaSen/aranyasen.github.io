// console.log('hello');

const ham = document.getElementById('ham-menu');
const header = document.getElementById('header-nav');

// console.log(nav);
// console.log(ham);

ham.addEventListener('click', () => {
    header.classList.toggle('show');
});
