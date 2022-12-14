const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bgColor: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

let intervalId = null;

function startChangeColor(e) {
  refs.startBtn.disabled = true;

  intervalId = setInterval(() => {
    refs.bgColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor(e) {
  refs.startBtn.disabled = false;

  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
