import $ from 'jquery';
import noUiSlider from 'nouislider';

import 'nouislider/distribute/nouislider.css';
import './range-slider.scss';

class RangeSlider {
  constructor($component) {
    this.$component = $component;
    this.init();
    this.render();
    this.attachEventHandlers();
  }

  init() {
    this.control = this.$component.find('.js-range-slider__control').get(0);
    this.value = this.$component.find('.js-range-slider__value').get(0);
  }

  render() {
    noUiSlider.create(this.control, {
      start: [5000, 10000],
      connect: true,
      step: 100,
      range: {
        min: [0],
        max: [16000]
      },
      format: {
        to(value) {
          return `${parseInt(value, 10)}₽`;
        },
        from(value) {
          return parseInt(value, 10);
        }
      }
    });
  }

  attachEventHandlers() {
    this.control.noUiSlider.on('update', this.handleRangeUpdate.bind(this));
  }

  handleRangeUpdate(values) {
    this.value.innerHTML = values
      .map((num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
      .join(' - ');
  }
}

$(() => {
  $('.js-range-slider').each((index, node) => {
    const rangeSlider = new RangeSlider($(node));
    return rangeSlider;
  });
});
