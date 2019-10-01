const funBusLogo = document.querySelector('.logo-heading');

funBusLogo.addEventListener('mouseenter', () =>{
    funBusLogo.style.transform= 'scale(2)';
    funBusLogo.style.transition= 'all 1s';
})
funBusLogo.addEventListener('mouseleave', () => {
    funBusLogo.style.transform = 'scale(1)';
    funBusLogo.style.transition = 'all 1s';
})

// const midImages = document.querySelectorAll('.img-content');

// midImages.addEventListener('click', (element) => {
//     element.style.transform = 'rotate(90deg)';
// })

const hiddenMessage = document.getElementById('hidden');
hiddenMessage.addEventListener('mouseover', () => {
    hiddenMessage.style.color = "blue";
})
hiddenMessage.addEventListener('mouseout', () => {
    hiddenMessage.style.color = 'white';
})