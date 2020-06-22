import './like-btn.scss';

const $likeBtn = $('.js-like-btn');

function handleClick(e) {
  const $count = $(this).find('.like-btn__count');
  const isActive = $(this).hasClass('like-btn--active');
  let countValue = parseInt($count.text(), 10);

  if (countValue === 0) {
    return false;
  }

  if (isActive) {
    countValue -= 1;
  } else {
    countValue += 1;
  }

  $(this).toggleClass('like-btn--active');

  $count.text(countValue);
}

$likeBtn.on('click', handleClick);