// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })
const imageSelector = () => {
  document.querySelectorAll('.hidden').forEach(image => {
    image.addEventListener('click', event => {
      image.classList.toggle('hidden');
      const activeImage = document.getElementsByClassName('active')[0]

      if (activeImage && image.src === activeImage.src) {
        image.classList.add('complete');
        activeImage.classList.add('complete');

        image.parentElement.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dark_green.svg/1200px-Dark_green.svg.png")';
        activeImage.parentElement.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dark_green.svg/1200px-Dark_green.svg.png")';

        image.parentElement.style.borderRadius = '24px'
        activeImage.parentElement.style.borderRadius = '24px'

        activeImage.classList.remove('active');
      } else if (1 === 1) {

      } else {
        image.classList.add('active');
      }
    })
  })
};

export default imageSelector;


// as we build images they get assigned class like image1 image 2
// add logic in case they press same image twice
// maybe change active image to const
// need another function to always check if its been completed
