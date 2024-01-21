const menuToggle = document.querySelector('.menu-toggle input');
menuToggle.addEventListener('click', function(){
    const ul = document.querySelector('nav ul');
    ul.classList.toggle('slide')
})