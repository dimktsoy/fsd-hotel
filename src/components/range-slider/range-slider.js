import noUiSlider from 'nouislider';
import $ from 'jquery';

import 'nouislider/distribute/nouislider.css';
import './range-slider.scss';

const $rangeSlider = $('.js-range-slider');

function rangeSliderInit() {
  const control = $(this).find('.range-slider__control').get(0);
  const value = $(this).find('.range-slider__value').get(0);

  noUiSlider.create(control, {
    start: [5000, 10000],
    connect: true,
    step: 100,
    range: {
      min: [0],
      max: [16000]
    },
    format: {
      to(val) {
        return `${parseInt(val, 10)}₽`;
      },
      from(val) {
        return parseInt(val, 10);
      }
    }
  });

  control.noUiSlider.on('update', (values) => {
    value.innerHTML = values
      .map((num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
      .join(' - ');
  });
}

$rangeSlider.each(rangeSliderInit);
