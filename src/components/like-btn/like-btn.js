import $ from 'jquery';
import './like-btn.scss';

class LikeBtn {
  constructor($component) {
    this.$component = $component;
    this.attachEventHandlers();
  }

  attachEventHandlers() {
    this.$component.on('click', this.handleButtonClick);
  }

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick(event) {
    const $likeBtn = $(event.currentTarget);
    const $likeBntCount = $likeBtn.find('.js-like-btn__count');
    const oldValue = parseInt($likeBntCount.text(), 10);
    let newValue = 0;

    $likeBtn.toggleClass('like-btn--active');

    if ($likeBtn.hasClass('like-btn--active')) {
      newValue = oldValue + 1;
    } else {
      newValue = oldValue - 1;
    }

    $likeBntCount.text(newValue);
  }
}

$(() => {
  $('.js-like-btn').each((index, node) => {
    const likeBtn = new LikeBtn($(node));
    return likeBtn;
  });
});
