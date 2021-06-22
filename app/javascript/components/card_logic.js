const cardLogic = () => {
  const secondsLabel = document.getElementById('second-count');
  let totalSeconds = 0;

  const completionCheck = () => {
    if (document.querySelectorAll('.complete').length === document.querySelectorAll('.card-holder').length) {
      alert(`You won! It took you ${secondsLabel.innerHTML} to complete`);
      location.reload();
    }
  };

  const timer = () => {
    setInterval(setTime, 1000);

    function setTime() {
      ++totalSeconds;
      if (totalSeconds === 1) {
        secondsLabel.innerHTML = `${totalSeconds} second`;
      } else {
        secondsLabel.innerHTML = `${totalSeconds} seconds`;
      }
    }
  }

  const imageSelector = () => {
    document.querySelectorAll('.hidden').forEach(image => {
      image.addEventListener('click', event => {
        const activeImage = document.querySelector('.active')
        image.classList.remove('hidden');
        if (totalSeconds === 0) {
          timer();
        }
        if (activeImage && image.src === activeImage.src) {
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
        } else if (!image.classList.contains('complete')) {
          image.classList.add('active');
        }
      })
    })
  };

  imageSelector();
};

export default cardLogic;
