import $ from 'jquery';

class Dropdown {
  constructor($component) {
    this.$component = $component;
    this.init();
    this.render();
    this.bindEventHandlers();
    this.atachEventHandlers();
  }

  init() {
    this.$trigger = this.$component.find('.js-dropdown__trigger');
    this.$input = this.$component.find('.js-dropdown__input');
    this.$list = this.$component.find('.js-dropdown__list');
  }

  render() {
    this.$list.find('.js-dropdown__item-count').each((index, input) => {
      if (parseInt($(input).val(), 10) === 0) {
        $(input).prev('.js-dropdown__item-button').prop('disabled', true);
      }
    });
  }

  bindEventHandlers() {
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleButtonIncrementDecrementClick = this.handleButtonIncrementDecrementClick.bind(this);
  }

  atachEventHandlers() {
    this.$trigger.on('click', this.handleTriggerClick);
    this.$list.on('click', '.js-dropdown__item-button', this.handleButtonIncrementDecrementClick);
    $(document)
      .on('click', this.constructor.hadleOutsideClick)
      .on('keydown', this.constructor.handlePressEsc);
  }

  handleButtonIncrementDecrementClick(event) {
    const $button = $(event.currentTarget);
    const $inputCount = $button.siblings('.js-dropdown__item-count');
    const oldValue = parseInt($inputCount.val(), 10);
    let newValue = 0;

    if ($button.text() === '+') {
      newValue = oldValue + 1;
      this.constructor.enableButton($button);
    } else {
      newValue = oldValue - 1;

      if (oldValue === 1) {
        this.constructor.disableButton($button);
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

  static handlePressEsc(event) {
    if (event.keyCode === 27) {
      $('.js-dropdown').removeClass('dropdown--open');
    }
  }

  static hadleOutsideClick(event) {
    const $dropdown = $('.js-dropdown');
    if ($dropdown !== event.target && !$dropdown.has(event.target).length) {
      $dropdown.removeClass('dropdown--open');
    }
  }

  static enableButton($button) {
    $button.prevAll('.js-dropdown__item-button').prop('disabled', false);
  }

  static disableButton($button) {
    $button.prop('disabled', true);
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
