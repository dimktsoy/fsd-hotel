import $ from 'jquery';

import './expand.scss';

class Expand {
  constructor($component) {
    this.$component = $component;
    this.init();
    this.render();
    this.bindEventHandlers();
    this.atachEventHandlers();
  }

  init() {
    this.$trigger = this.$component.find('.js-expand__trigger');
    this.$content = this.$component.find('.js-expand__content');
  }

  render() {
    if (!this.$component.hasClass('expand--open')) {
      this.$content.hide();
    }
  }

  bindEventHandlers() {
    this.handleTrigerClick = this.handleTrigerClick.bind(this);
  }

  atachEventHandlers() {
    this.$trigger.on('click', this.handleTrigerClick);
  }

  handleTrigerClick() {
    this.$component.toggleClass('expand--open');
    this.$content.slideToggle('fast');
  }
}

$(() => {
  $('.js-expand').each((index, node) => {
    const dropdown = new Expand($(node));
    return dropdown;
  });
});
