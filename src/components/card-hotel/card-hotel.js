import $ from 'jquery';
import 'slick-carousel';

import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import './card-hotel.scss';

class CardHotel {
  constructor($component) {
    this.$component = $component;
    this.init();
    this.render();
  }

  init() {
    this.$carousel = this.$component.find('.js-card-hotel__carousel');
  }

  render() {
    this.$carousel.slick({
      dots: true
    });
  }
}

$(() => {
  $('.js-card-hotel').each((index, node) => new CardHotel($(node)));
});
