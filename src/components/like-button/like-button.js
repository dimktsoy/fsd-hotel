import $ from 'jquery';
import './like-button.scss';

class LikeButton {
  constructor($component) {
    this.$component = $component;
    this.$count = $('.js-like-button__count', this.$component);
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.$component.on('click', this.handleLikeButtonClick.bind(this));
  }

  handleLikeButtonClick() {
    const oldValue = parseInt(this.$count.text(), 10);
    let newValue = 0;

    this.$component.toggleClass('like-button--active');

    if (this.$component.hasClass('like-button--active')) {
      newValue = oldValue + 1;
    } else {
      newValue = oldValue - 1;
    }

    this.$count.text(newValue);
  }
}

$(() => {
  $('.js-like-button').each((index, node) => new LikeButton($(node)));
});
