import $ from 'jquery';
import './like-btn.scss';

class LikeBtn {
  constructor($component) {
    this.$component = $component;
    this.$count = $('.js-like-btn__count', this.$component);
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.$component.on('click', this.handleLikeBtnClick.bind(this));
  }

  handleLikeBtnClick() {
    const oldValue = parseInt(this.$count.text(), 10);
    let newValue = 0;

    this.$component.toggleClass('like-btn--active');

    if (this.$component.hasClass('like-btn--active')) {
      newValue = oldValue + 1;
    } else {
      newValue = oldValue - 1;
    }

    this.$count.text(newValue);
  }
}

$(() => {
  $('.js-like-btn').each((index, node) => new LikeBtn($(node)));
});
