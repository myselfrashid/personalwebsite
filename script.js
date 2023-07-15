const toggleBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav-links');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('true');
    nav.setAttribute("style", "display:flex")

    links.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `listfade 1s ease-in ${index / 100}s`
        }

    });
    toggleBtn.classList.toggle('toggle');
})