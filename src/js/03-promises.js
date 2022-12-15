const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('.form__btn'),
};

console.log(refs.form);
console.log(refs.submitBtn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
