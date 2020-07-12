import $ from 'jquery';

import './page-header.scss';

class PageHeader {
  constructor($component) {
    this.$component = $component;
    this.$collapse = $('.js-page-header__collapse', this.$component);
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    $('.js-page-header__menu-trigger', this.$component).on(
      'click',
      this.handleMenuTriggerClick.bind(this)
    );
  }

  handleMenuTriggerClick(event) {
    $(event.currentTarget).toggleClass('page-header__menu-trigger--open');
    this.$collapse.toggleClass('page-header__collapse--open');
  }
}

$(() => {
  $('.js-page-header').each((index, node) => new PageHeader($(node)));
});
