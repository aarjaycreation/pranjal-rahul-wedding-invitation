window.addEventListener('load', () => {
    const leftCurtain = document.querySelector('.curtain_left');
    const rightCurtain = document.querySelector('.curtain_right');

    setTimeout(() => {
        leftCurtain.style.transform = 'translateX(-100%)';
        rightCurtain.style.transform = 'translateX(100%)';
    }, 500); // Adjust the delay as needed
});


/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('floating');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
    document.getElementById('floating-toggle').classList.remove("active");
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW & HIDE MENU ===============*/
const toggleButton = document.getElementById('floating-toggle')

const activeMenu = () => {
    toggleButton.classList.toggle('active')
    // Wait for 5 seconds and remove the class
    // setTimeout(() => {
    //     toggleButton.classList.remove("active");
    // }, 5000);
}


toggleButton.addEventListener('click', activeMenu)