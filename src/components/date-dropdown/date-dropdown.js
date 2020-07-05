import $ from 'jquery';
import Calendar from '../calendar/calendar';

import './date-dropdown.scss';

class DateDropdown extends Calendar {
  init() {
    const $inputStart = this.$component.find('.js-date-dropdown__input-start');
    const $inputEnd = this.$component.find('.js-date-dropdown__input-end');

    this.datepicker = $inputStart
      .datepicker({
        ...this.constructor.getDatepickerConfig(),
        minDate: new Date(),
        onSelect(formattedDate) {
          $inputStart.val(formattedDate.split(' - ')[0]);
          $inputEnd.val(formattedDate.split('-')[1]);
        }
      })
      .data('datepicker');

    $inputEnd.on('click', this.constructor.handleInputEndClick);
  }

  static handleInputEndClick(event) {
    $(event.currentTarget)
      .closest('.js-date-dropdown')
      .find('.js-date-dropdown__input-start')
      .focus();
  }
}

export default DateDropdown;
