const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');

function changeSize(){
    sizes.forEach(size =>size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary =this.getAttribute('primary');
    colors.forEach(cl =>cl.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(cl => cl.addEventListener('click',changeColor));