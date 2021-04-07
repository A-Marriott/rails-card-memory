const completionCheck = () => {
  if (document.querySelectorAll('.complete').length === document.querySelectorAll('.card-holder').length) {
    alert(`You won! It took you ${document.getElementById('second-count').innerHTML} to complete`);
    location.reload();
  }
};

const timer = () => {
  const secondsLabel = document.getElementById('second-count');
  let totalSeconds = 0
  setInterval(setTime, 1000);

  function setTime() {
    ++totalSeconds;
    if (secondsLabel.innerHTML === '0 seconds') {
      secondsLabel.innerHTML = `${totalSeconds} second`;
    } else {
      secondsLabel.innerHTML = `${totalSeconds} seconds`;
    }
  }
}

const imageSelector = () => {
  document.querySelectorAll('.hidden').forEach(image => {
    image.addEventListener('click', event => {
      if (document.getElementById('second-count').innerHTML === '0 seconds') {
        timer();
      }
      const activeImage = document.getElementsByClassName('active')[0]
      image.classList.remove('hidden');
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
