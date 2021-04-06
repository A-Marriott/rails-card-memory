// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })
const imageSelector = () => {
  document.querySelectorAll('.hidden').forEach(image => {
    image.addEventListener('click', event => {
      image.classList.toggle('hidden');
    })
  })
};

export default imageSelector;
