import $ from 'jquery';
import Dropdown from './Dropdown';

class DropdownDetails extends Dropdown {
  render() {
    super.render();
    this.calculateResult();
  }

  handleButtonIncrementDecrementClick(event) {
    super.handleButtonIncrementDecrementClick(event);
    this.calculateResult();
  }

  calculateResult() {
    const result = [];

    this.$component.find('.js-dropdown__item-count').each((index, input) => {
      const data = $(input).data('dropdown');
      const count = parseInt($(input).val(), 10);
      result.push(`${$(input).val()} ${this.constructor.getNoun(count, ...data)}`);
    });

    this.$input.val(`${result.slice(0, 2).join(', ')}...`);
  }
}

export default DropdownDetails;
