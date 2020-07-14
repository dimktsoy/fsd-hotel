import $ from 'jquery';
import 'slick-carousel';

import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import './card-hotel.scss';

class CardHotel {
  constructor($component) {
    this.$component = $component;
    this.render();
  }

  render() {
    $('.js-card-hotel__carousel', this.$component).slick({
      dots: true
    });
  }
}

$(() => {
  $('.js-card-hotel').each((index, node) => new CardHotel($(node)));
});
