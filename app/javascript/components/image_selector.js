const completionCheck = () => {
  if (document.querySelectorAll('.complete').length === document.querySelectorAll('.card-holder').length) {
    setTimeout(() => alert("You won!"), 0.01);
    location.reload();
  }
};

const imageSelector = () => {
  document.querySelectorAll('.hidden').forEach(image => {
    image.addEventListener('click', event => {
      image.classList.remove('hidden');
      const activeImage = document.getElementsByClassName('active')[0]
        if (image.classList.contains('active') || image.classList.contains('complete')) {
          // do nothing
        } else if (activeImage && image.src === activeImage.src) {
          activeImage.classList.remove('active');
          window.setTimeout(() => {
            image.classList.add('complete');
            activeImage.classList.add('complete');

            image.parentElement.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dark_green.svg/1200px-Dark_green.svg.png")';
            activeImage.parentElement.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dark_green.svg/1200px-Dark_green.svg.png")';
            completionCheck();
          }, 300);
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
