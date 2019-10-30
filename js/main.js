const clicker = document.querySelector('#intro');
const image = document.querySelector('#concert');

image.style.display = 'none';
const div = document.querySelector('#intro');

clicker.onclick = () => {
   image.style.display = 'block';
   div.style.display = 'none';
};

image.onclick = () => {
   image.style.display = 'none';
   div.style.display = 'block';
};


//..//
const divp = document.querySelector('#music');
const image2 = document.querySelector('#rotate-right');


image2.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   e.target.setAttribute("src", "images/boyscrowd.jpg");
};

image2.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   e.target.setAttribute("src", "images/crowd.jpg");
};
