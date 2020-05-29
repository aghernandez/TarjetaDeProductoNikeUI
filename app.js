const sizes = document.querySelectorAll('.size');

function changeSize(){
    sizes.forEach(size =>size.classList.remove('active'));
    this.classList.add('active');
}

sizes.forEach(size => size.addEventListener('click', changeSize));