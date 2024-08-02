function blackHeader(){
    if(scrollY <= 100 && $(window).width() > 1420){
        document.querySelector('#header').classList.remove('blur');
        document.querySelector('.logo-targ').width = 150;
    } else{
        document.querySelector('#header').classList.add('blur');
        document.querySelector('.logo-targ').width = 80;
    }
};

addEventListener ('scroll', blackHeader);
window.addEventListener('resize', blackHeader);