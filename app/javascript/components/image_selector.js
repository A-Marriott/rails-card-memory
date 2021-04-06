// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })
const imageSelector = () => {
  document.querySelectorAll('.hidden').forEach(image => {
    image.addEventListener('click', event => {
      image.classList.remove('hidden');
      const activeImage = document.getElementsByClassName('active')[0]
        if (image.classList.contains('active') || image.classList.contains('complete')) {

        } else if (activeImage && image.src === activeImage.src) {
          activeImage.classList.remove('active');

          window.setTimeout(() => {
            image.classList.add('complete');
            activeImage.classList.add('complete');

            image.parentElement.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dark_green.svg/1200px-Dark_green.svg.png")';
            activeImage.parentElement.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dark_green.svg/1200px-Dark_green.svg.png")';
          }, 500);
        } else if (activeImage) {
          activeImage.classList.remove('active');
          window.setTimeout(() => {
            image.classList.add('hidden');
            activeImage.classList.add('hidden');
          }, 800);
        } else {
          image.classList.add('active');
        }
    })
  })
};

export default imageSelector;

// need another function to always check if its been completed
// add logic for pressing image thats already completed
