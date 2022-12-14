import flatpickr from 'flatpickr'; // Описаний в документації
import 'flatpickr/dist/flatpickr.min.css'; // Додатковий імпорт стилів
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'), //Кнопка «Start»
  numberDays: document.querySelector('span[data-days]'),
  numberHours: document.querySelector('span[data-hours]'),
  numberMinutes: document.querySelector('span[data-minutes]'),
  numberSeconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.addEventListener('click', startTimer);

refs.startBtn.disabled = true; //Кнопка «Start» неактивна

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (new Date() > selectedDates[0]) {
      return Notiflix.Report.failure(
        'WRONG DATE',
        'Please choose a date in the future',
        'OK',
        {
          width: '360px',
          svgSize: '120px',
        }
      ); // Alert
    }

    refs.startBtn.disabled = false; //Кнопка «Start» активна
  },
};

flatpickr('#datetime-picker', options);

function startTimer(e) {
  const startTime = Date.now();

  setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;

    const timeComponents = convertMs(deltaTime);

    refs.numberDays.textContent = timeComponents.days;
    refs.numberHours.textContent = timeComponents.hours;
    refs.numberMinutes.textContent = timeComponents.minutes;
    refs.numberSeconds.textContent = timeComponents.seconds;
  }, 1000);
}

function updateClockface({ days, hours, minutes, seconds }) {
  refs.numberSeconds.textContent = '5';
}

function addLeadingZero(value) {
  // Приймає число, призводить до рядка і додає на початок 0 якщо число менше 2-х знаків
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Кількість мілісекунд на одиницю часу
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Залишилося днів
  const days = addLeadingZero(Math.floor(ms / day));
  // Залишилося годин
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Залишилось хвилин
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Залишилося секунд
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
