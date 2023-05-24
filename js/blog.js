const images = [
    'img/blog/blog1.jpeg',
    'img/blog/blog2.jpeg',
    'img/blog/blog3.jpeg',
    'img/blog/blog4.jpeg',
    'img/blog/blog5.jpeg',
    'img/blog/blog6.jpeg',
];

const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Elementum eu facilisis sed odio morbi quis commodo odio aenean. Fames ac turpis egestas integer eget aliquet nibh praesent.',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Elementum tempus egestas sed sed risus pretium quam vulputate.',
    'Praesent tristique magna sit amet purus gravida quis blandit turpis. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.',
    'Cursus in hac habitasse platea dictumst quisque sagittis purus. Eu non diam phasellus vestibulum lorem sed risus. Vitae aliquet nec ullamcorper sit.',
    'Ipsum consequat nisl vel pretium lectus. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet tellus cras adipiscing.'
];

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentImage = document.getElementById('current-image');
const counter = document.getElementById('image-counter');
const descriptionP = document.getElementById('description').getElementsByTagName('p')[0];
let index = 0;

function updateImage() {
    currentImage.src = images[index];
    descriptionP.innerHTML = descriptions[index];
    counter.innerHTML = `<h2 class='num-img'>${index + 1}/${images.length}</h2>`;
    descriptionP.parentNode.classList.remove('visible'); 
};

function updateButtons() {
    if (index === 0) {
        prevButton.classList.add('disabled');
        nextButton.classList.remove('disabled');
    } else if (index === images.length - 1) {
        nextButton.classList.add('disabled');
        prevButton.classList.remove('disabled');
    } else {
        prevButton.classList.remove('disabled');
        nextButton.classList.remove('disabled');
    }
};

function nextImage() {
    if (index < images.length - 1) {
        index++;
        updateImage();
        updateButtons();
    }
};

function prevImage() {
    if (index > 0) {
        index--;
        updateImage();
        updateButtons();
    }
};

currentImage.addEventListener('click', () => {
    descriptionP.parentNode.classList.toggle('visible');
});

updateImage();
updateButtons();
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
