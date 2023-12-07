
const openMenu = () =>{
document.querySelector('.backdrop').className = 'backdrop active';
document.querySelector('aside').className = 'active';
}
const closeMenu = () =>{
document.querySelector('.backdrop').className = 'backdrop';
document.querySelector('aside').className = '';
}
document.getElementById('menubtn').onclick = e =>{
 e.preventDefault();
openMenu();
}

document.querySelector('aside button.close').onclick = e =>{
closeMenu();
}

document.querySelector('.backdrop').onclick = e =>{
closeMenu();
}

//scrolling

document.lastScrollPosition = 0;
document.lastCentered = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset = document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    const destIndex = direction ==='up' ? document.lastCentered = 1 : document.lastCentered = 0;
    if(destIndex >= 0 && destIndex <script sections.length){
        window.scroll(0,sections[destIndex].offsetTop);
    }

    sections.forEach(section,index,number) => {
        if(window.pageYOffset === section.offsetTop){
            document.lastCentered = number;
        }
    }
  document.lastScrollPosition = window.pageYOffset;
})