/* eslint-disable class-methods-use-this */
import $ from 'jquery';

class Dropdown {
  constructor($component) {
    this.$component = $component;
    this.$input = $('.js-dropdown__input', this.$component);
    this.$list = $('.js-dropdown__list', this.$component);
    this.$buttonClear = $('.js-dropdown__button-clear', this.$component);
    this.$buttonApply = $('.js-dropdown__button-apply', this.$component);
    this.disableDecrementButtons();
    this.bindEventHandlers();
  }

  disableDecrementButtons() {
    this.$list.find('.js-dropdown__item-count').each((index, input) => {
      if (parseInt($(input).val(), 10) === 0) {
        $(input).prev('.js-dropdown__item-button').prop('disabled', true);
      }
    });
  }

  bindEventHandlers() {
    $('.js-dropdown__trigger', this.$component).on('click', this.handleTriggerClick.bind(this));

    this.$list.on('click', '.js-dropdown__item-button', this.handleItemButtonClick.bind(this));

    $(document).on('click', this.handleDocumentClick).on('keydown', this.handleDocumentKeydown);
  }

  handleItemButtonClick(event) {
    const $button = $(event.currentTarget);
    const $inputCount = $button.siblings('.js-dropdown__item-count');
    const oldValue = parseInt($inputCount.val(), 10);
    let newValue = 0;

    if ($button.text() === '+') {
      newValue = oldValue + 1;
      $button.prevAll('.js-dropdown__item-button').prop('disabled', false);
    } else {
      newValue = oldValue - 1;

      if (oldValue === 1) {
        $button.prop('disabled', true);
      }
    }

    $inputCount.val(newValue);
  }

  handleTriggerClick() {
    if (this.$component.hasClass('dropdown--open')) {
      this.$component.removeClass('dropdown--open');
    } else {
      $('.js-dropdown').removeClass('dropdown--open');
      this.$component.addClass('dropdown--open');
    }
  }

  handleDocumentKeydown(event) {
    if (event.keyCode === 27) {
      $('.js-dropdown').removeClass('dropdown--open');
    }
  }

  handleDocumentClick(event) {
    const $dropdown = $('.js-dropdown');
    if ($dropdown !== event.target && !$dropdown.has(event.target).length) {
      $dropdown.removeClass('dropdown--open');
    }
  }

  static getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }
}

export default Dropdown;
