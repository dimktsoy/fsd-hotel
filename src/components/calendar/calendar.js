import $ from 'jquery';
import 'air-datepicker';

import '../../../node_modules/air-datepicker/src/sass/datepicker.scss';
import '../../../node_modules/air-datepicker/src/sass/cell.scss';
import '../../../node_modules/air-datepicker/src/sass/navigation.scss';
import '../../../node_modules/air-datepicker/src/sass/timepicker.scss';
import './calendar.scss';

class Calendar {
  constructor($component) {
    this.$component = $component;
    this.$buttonApply = $(
      '<span class="datepicker--button datepicker--button-apply">Применить</span>'
    );
    this.init();
    this.render();
    this.bindEventHandlers();
    this.atachEventHandlers();
  }

  init() {
    this.datepicker = this.$component
      .datepicker({ ...this.constructor.getDatepickerConfig(), inline: true })
      .data('datepicker');
  }

  render() {
    this.datepicker.$datepicker.find('.datepicker--buttons').append(this.$buttonApply);
  }

  bindEventHandlers() {
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
  }

  atachEventHandlers() {
    this.$buttonApply.on('click', this.handleApplyButtonClick);
  }

  // eslint-disable-next-line class-methods-use-this
  handleApplyButtonClick(event) {
    event.stopPropagation();
    this.datepicker.hide();
  }

  static getDatepickerConfig() {
    return {
      clearButton: true,
      range: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd.mm.yyyy',
      navTitles: {
        days: 'MM yyyy'
      },
      prevHtml:
        '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/></svg >',
      nextHtml:
        '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>'
    };
  }
}

export default Calendar;

$(() => {
  $('.js-calendar').each((index, node) => new Calendar($(node)));
});
