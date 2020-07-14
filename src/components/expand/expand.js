import $ from 'jquery';

import './expand.scss';

class Expand {
  constructor($component) {
    this.$component = $component;
    this.$trigger = $('.js-expand__trigger', this.$component);
    this.$content = $('.js-expand__content', this.$component);
    this.closeExpand();
    this.bindEventHandlers();
  }

  closeExpand() {
    if (!this.$component.hasClass('expand--open')) {
      this.$content.hide();
    }
  }

  bindEventHandlers() {
    $('.js-expand__trigger', this.$component).on('click', this.handleTriggerClick.bind(this));
  }

  handleTriggerClick() {
    this.$component.toggleClass('expand--open');
    this.$content.slideToggle('fast');
  }
}

$(() => {
  $('.js-expand').each((index, node) => new Expand($(node)));
});
