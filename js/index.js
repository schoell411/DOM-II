const funBusLogo = document.querySelector('.logo-heading');

funBusLogo.addEventListener('mouseenter', () =>{
    funBusLogo.style.transform= 'scale(2)';
    funBusLogo.style.transition= 'all 1s';
})
funBusLogo.addEventListener('mouseleave', () => {
    funBusLogo.style.transform = 'scale(1)';
    funBusLogo.style.transition = 'all 1s';
})

const midImages = document.querySelectorAll('.img-content');

midImages.forEach(element => {
element.addEventListener('click', () => {
    element.style.transform = 'rotate(360deg)';
    element.style.transition = 'all 3s';
})
})

const hiddenMessage = document.getElementById('hidden');
hiddenMessage.addEventListener('mouseover', () => {
    hiddenMessage.style.color = "blue";
})
hiddenMessage.addEventListener('mouseout', () => {
    hiddenMessage.style.color = 'white';
})

// const navLinks = document.querySelectorAll(nav a)

// const midImages = document.querySelectorAll('.img-content');
// console.log(midImages);
// window.addEventListener('scroll', () => {
//     midImages[0].src = 'img/Magic-Schoolbus-Event-Page.jpg';
// })
