import $ from 'jquery';
import Dropdown from './Dropdown';

class DropdownGuests extends Dropdown {
  init() {
    super.init();
    this.$buttonClear = this.$component.find('.js-dropdown__button-clear');
    this.$buttonApply = this.$component.find('.js-dropdown__button-apply');
  }

  render() {
    super.render();
    this.calculateResult();
  }

  bindEventHandlers() {
    super.bindEventHandlers();
    this.handleButtonClearClick = this.handleButtonClearClick.bind(this);
    this.handleButtonApplyClick = this.handleButtonApplyClick.bind(this);
  }

  atachEventHandlers() {
    super.atachEventHandlers();
    this.$buttonClear.on('click', this.handleButtonClearClick);
    this.$buttonApply.on('click', this.handleButtonApplyClick);
  }

  handleButtonIncrementDecrementClick(event) {
    super.handleButtonIncrementDecrementClick(event);
    this.calculateResult();
  }

  showButtonClear() {
    if (this.$buttonClear.is(':hidden')) this.$buttonClear.show();
  }

  hideButtonClear() {
    if (this.$buttonClear.is(':visible')) this.$buttonClear.hide();
  }

  handleButtonClearClick(event) {
    $(event.currentTarget).hide();
    this.$input.val('');
    this.$list
      .find('.js-dropdown__item-count')
      .val('0')
      .prev('.js-dropdown__item-button')
      .prop('disabled', true);
    this.hideButtonClear();
  }

  handleButtonApplyClick() {
    this.$component.removeClass('dropdown--open');
  }

  calculateResult() {
    let countGuests = 0;
    let countBaby = 0;
    let resultGuests = '';
    let resultBaby = '';

    this.$component
      .find('.js-dropdown__item-count')
      .not('.js-dropdown__item-count-baby')
      .each((index, input) => {
        countGuests += parseInt($(input).val(), 10);
      });

    this.$component.find('.js-dropdown__item-count-baby').each((index, input) => {
      countBaby += parseInt($(input).val(), 10);
    });

    resultGuests =
      countGuests > 0
        ? `${countGuests} ${this.constructor.getNoun(countGuests, 'гость', 'гостя', 'гостей')}`
        : '';

    resultBaby =
      countBaby > 0 && countGuests > 0
        ? `, ${countBaby} ${this.constructor.getNoun(
            countBaby,
            'младенец',
            'младенца',
            'младенцев'
          )}`
        : '';

    this.$input.val(resultGuests + resultBaby);

    if (countGuests === 0 && countBaby === 0) {
      this.hideButtonClear();
    } else {
      this.showButtonClear();
    }
  }
}

export default DropdownGuests;
