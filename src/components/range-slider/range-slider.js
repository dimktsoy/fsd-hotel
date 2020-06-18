import noUiSlider from 'nouislider';
import './range-slider.scss';

const $rangeSlider = $('#range-slider');
const control = $rangeSlider.find('.range-slider__control').get(0);
const value = $rangeSlider.find('.range-slider__value').get(0);

noUiSlider.create(control, {
  start: [5000, 10000],
  connect: true,
  step: 100,
  range: {
    'min': [0],
    'max': [16000],
  },
  format: {
    to: function (value) {
      return parseInt(value) + '₽';
    },
    from: function (value) {
      return parseInt(value);
    }
  },
  cssPrefix: 'range-slider__'
});

control.noUiSlider.on('update', values => {
  value.innerHTML = values.map((num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')).join(' - ');
});