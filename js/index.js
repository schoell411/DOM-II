
const funBusLogo = document.querySelector('.logo-heading');
// event 1
funBusLogo.addEventListener('mouseenter', () =>{
    funBusLogo.style.transform= 'scale(2)';
    funBusLogo.style.transition= 'all 1s';
})
// event 2
funBusLogo.addEventListener('mouseleave', () => {
    funBusLogo.style.transform = 'scale(1)';
    funBusLogo.style.transition = 'all 1s';
})

const midImages = document.querySelectorAll('.img-content');

// event 3
midImages.forEach(element => {
element.addEventListener('click', () => {
    element.style.transform = 'rotate(360deg)';
    element.style.transition = 'all 3s';
})
})

const hiddenMessage = document.getElementById('hidden');
// event 4
hiddenMessage.addEventListener('mouseover', () => {
    hiddenMessage.style.color = "blue";
})

// event 5
hiddenMessage.addEventListener('mouseout', () => {
    hiddenMessage.style.color = '#40E0D0';
})

// event 6
const secondHiddenMessage = document.querySelector(".text-content h2");
console.log(secondHiddenMessage);
secondHiddenMessage.addEventListener("dblclick", () => {
  secondHiddenMessage.textContent = "The treasure is almost yours!";
});

// event 7
const banner = document.querySelector(".intro h2");
window.addEventListener("keydown", () => {
  banner.textContent = "OBEY ~ CONSUME ~ CONFORM";
  banner.style.fontSize = "75px";
});

// event 8
window.addEventListener("keyup", () => {
  banner.textContent = "Welcome To Fun Bus!";
  banner.style.fontSize = "32px";
});

//event 9
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  body.style.backgroundColor = "#40E0D0";
});

// event 10
window.addEventListener('resize', () => {
    funBusLogo.style.color = "#40E0D0";
})

// propagation

const LetsGoSection = document.querySelector('.content-section');
const LetsGoSectionP = document.querySelector('.content-section p');

LetsGoSection.addEventListener('click', () => {
    LetsGoSection.style.backgroundColor = '#663399';
    LetsGoSection.style.color = '#FFFFFF';
})
LetsGoSectionP.addEventListener('click', () => {
    LetsGoSectionP.style.backgroundColor = '#FF00FF';
    LetsGoSectionP.style.color = '#FFFFFF';
    event.stopPropagation();
})

// stop default

const navLinks = document.querySelectorAll('.nav-container nav a');
navLinks.forEach((link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
}))