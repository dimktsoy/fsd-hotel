import $ from 'jquery';
import Dropdown from './Dropdown';

class DropdownGuests extends Dropdown {
  constructor($component) {
    super($component);
    this.calculateResult();
  }

  bindEventHandlers() {
    super.bindEventHandlers(this);
    this.$buttonClear.on('click', this.handleButtonClearClick.bind(this));
    this.$buttonApply.on('click', this.handleButtonApplyClick.bind(this));
  }

  handleItemButtonClick(event) {
    super.handleItemButtonClick(event);
    this.calculateResult();
  }

  showButtonClear() {
    if (this.$buttonClear.is(':hidden')) this.$buttonClear.show();
  }

  hideButtonClear() {
    this.$buttonClear.hide();
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
