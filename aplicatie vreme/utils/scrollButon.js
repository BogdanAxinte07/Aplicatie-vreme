const scrollButton = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
    const halfwayPoint = window.innerHeight / 2;
    if(window.scrollY > halfwayPoint) {
       scrollButton.style.display = 'block';
    } else{
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', ()=>{
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})