import $ from 'jquery';

import './expandable-checkbox.scss';

class ExpandableCheckbox {
  constructor($component) {
    this.$component = $component;
    this.$trigger = $('.js-expandable-checkbox__trigger', this.$component);
    this.$content = $('.js-expandable-checkbox__content', this.$component);
    this.closeExpand();
    this.bindEventHandlers();
  }

  closeExpand() {
    if (!this.$component.hasClass('expandable-checkbox--open')) {
      this.$content.hide();
    }
  }

  bindEventHandlers() {
    $('.js-expandable-checkbox__trigger', this.$component).on(
      'click',
      this.handleTriggerClick.bind(this)
    );
  }

  handleTriggerClick() {
    this.$component.toggleClass('expandable-checkbox--open');
    this.$content.slideToggle('fast');
  }
}

$(() => {
  $('.js-expandable-checkbox').each((index, node) => new ExpandableCheckbox($(node)));
});
