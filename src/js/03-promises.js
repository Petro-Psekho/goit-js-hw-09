import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelayMs: document.querySelector('[name="delay"]'),
  delayStepMs: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', submitPromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay }); // Fullogfill
      } else {
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
}

function submitPromises(e) {
  e.preventDefault();

  let firstDelay = refs.firstDelayMs.valueAsNumber; // Значення инпуту First delay (перша затримка)
  const delayStep = refs.delayStepMs.valueAsNumber; // Значення инпуту Delay step
  const amount = refs.amount.valueAsNumber; // Значення инпуту Amount

  for (let i = 1; i <= amount; i++) {
    const position = i;

    createPromise(position, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += delayStep;
  }
}
