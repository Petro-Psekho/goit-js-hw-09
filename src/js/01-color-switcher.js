const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

console.log(refs.startBtn.attributes);
console.log(refs.stopBtn.attributes);

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor(e) {
  console.log('кликнул Start');
}

function stopChangeColor(e) {
  console.log('кликнул Stop');
}
