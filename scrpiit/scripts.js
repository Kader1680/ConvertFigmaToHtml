let slider = document.querySelector('.slider')
let div = document.querySelectorAll('.slider div')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let count = 1;
let size = div[0].clientWidth;
next.addEventListener('click', () =>{
    
    slider.style.transform = 'translateX(' + ( -size * count) + 'px )';
    count++
    
    
})
prev.addEventListener('click', () =>{
    
    slider.style.transform = 'translateX(' + ( -size * count) + 'px )';
    count--;
    
})