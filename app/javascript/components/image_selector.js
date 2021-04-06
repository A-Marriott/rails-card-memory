// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })
const imageSelector = () => {
  document.querySelectorAll('.hidden').forEach(image => {
    image.addEventListener('click', event => {
      image.classList.toggle('hidden');
      if (document.getElementsByClassName('active')[0]) {
        console.log('first check')
        if (image.src === document.getElementsByClassName('active')[0].src) {
          console.log('second check')
        }
      } else {
        image.classList.add('active');
      }
    })
  })
};

export default imageSelector;


// as we build images they get assigned class like image1 image 2
// add logic in case they press same image twice
