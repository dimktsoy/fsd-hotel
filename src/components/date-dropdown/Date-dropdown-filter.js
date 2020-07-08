import Calendar from '../calendar/calendar';

class DateDropdownFilter extends Calendar {
  init() {
    this.datepicker = this.$component
      .find('.js-date-dropdown__input-filter')
      .datepicker({ ...this.constructor.getDatepickerConfig(), dateFormat: 'd M' })
      .data('datepicker');
  }
}

export default DateDropdownFilter;
