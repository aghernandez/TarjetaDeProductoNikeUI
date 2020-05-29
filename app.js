const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe'); 
const gradient = document.querySelectorAll('gradient');

function changeSize(){
    sizes.forEach(size =>size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary =this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);

    colors.forEach(cl =>cl.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(s => s.classList.remove('show')); 
    shoe.classList.add('show');
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(cl => cl.addEventListener('click',changeColor));