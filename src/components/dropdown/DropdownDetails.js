import $ from 'jquery';
import Dropdown from './Dropdown';

class DropdownDetails extends Dropdown {
  constructor($component) {
    super($component);
    this.calculateResult();
  }

  handleItemButtonClick(event) {
    super.handleItemButtonClick(event);
    this.calculateResult();
  }

  calculateResult() {
    const result = [];

    this.$component.find('.js-dropdown__item-count').each((index, input) => {
      const wordsList = $(input).data('dropdown');
      const count = parseInt($(input).val(), 10);
      result.push(`${count} ${this.constructor.getNoun(count, ...wordsList)}`);
    });

    this.$input.val(`${result.slice(0, 2).join(', ')}...`);
  }
}

export default DropdownDetails;
