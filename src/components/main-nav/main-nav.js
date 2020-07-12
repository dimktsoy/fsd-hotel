/* eslint-disable class-methods-use-this */
import $ from 'jquery';

import './main-nav.scss';

class MainNav {
  constructor($component) {
    this.$component = $component;
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    $('.js-main-nav__link', this.$component).on('click', this.handleClickItemDropdown.bind(this));
    $(document).on('click', this.handleDocumentClick.bind(this));
  }

  handleClickItemDropdown(event) {
    event.preventDefault();
    const $link = $(event.currentTarget);
    const $item = $link.parent('.js-main-nav__item--dropdown');

    if ($item.hasClass('main-nav__item--open')) {
      $item.removeClass('main-nav__item--open');
    } else {
      $('.js-main-nav__item--dropdown').removeClass('main-nav__item--open');
      $item.addClass('main-nav__item--open');
    }
  }

  handleDocumentClick(event) {
    const $dropdown = $('.js-main-nav__item--dropdown');
    if ($dropdown !== event.target && !$dropdown.has(event.target).length) {
      $dropdown.removeClass('main-nav__item--open');
    }
  }
}

$(() => {
  $('.js-main-nav').each((index, node) => new MainNav($(node)));
});
