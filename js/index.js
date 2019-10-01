const funBusLogo = document.querySelector('.logo-heading');

funBusLogo.addEventListener('mouseenter', () =>{
    funBusLogo.style.transform= 'scale(2)';
    funBusLogo.style.transition= 'all 1s';
})
funBusLogo.addEventListener('mouseleave', () => {
    funBusLogo.style.transform = 'scale(1)';
    funBusLogo.style.transition = 'all 1s';
})
