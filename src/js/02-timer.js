import flatpickr from 'flatpickr'; // Описаний в документації
import 'flatpickr/dist/flatpickr.min.css'; // Додатковий імпорт стилів
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('button[data-start]'), //Кнопка «Start»
};

refs.startBtn.disabled = true; //Кнопка «Start» неактивна

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (new Date() > selectedDates[0]) {
      Notiflix.Report.failure(
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
