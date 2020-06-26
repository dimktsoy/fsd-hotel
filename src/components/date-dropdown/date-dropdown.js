import $ from 'jquery';
import 'air-datepicker';

import '../../../node_modules/air-datepicker/src/sass/datepicker.scss';
import '../../../node_modules/air-datepicker/src/sass/cell.scss';
import '../../../node_modules/air-datepicker/src/sass/navigation.scss';
import '../../../node_modules/air-datepicker/src/sass/timepicker.scss';
import './date-dropdown.scss';

class DateDropdown {
  constructor($component) {
    this.$component = $component;
    this.isFilter = !!$component.find('.js-date-dropdown__input-filter').length;
    this.init();
  }

  init() {
    if (this.isFilter) {
      this.datepicker = this.$component
        .find('.js-date-dropdown__input-filter')
        .datepicker({ ...DateDropdown.getDatepickerConfig(), dateFormat: 'd M' })
        .data('datepicker');
    } else {
      const $inputStart = this.$component.find('.js-date-dropdown__input-start');
      const $inputEnd = this.$component.find('.js-date-dropdown__input-end');

      this.datepicker = $inputStart
        .datepicker({
          ...DateDropdown.getDatepickerConfig(),
          minDate: new Date(),
          onSelect(formattedDate) {
            $inputStart.val(formattedDate.split(' - ')[0]);
            $inputEnd.val(formattedDate.split('-')[1]);
          }
        })
        .data('datepicker');

      $inputEnd.on('click', DateDropdown.handleInputEndClick);
    }
  }

  static handleInputEndClick(event) {
    $(event.currentTarget)
      .closest('.js-date-dropdown')
      .find('.js-date-dropdown__input-start')
      .focus();
  }

  static handleApplyButtonClick(event) {
    event.stopPropagation();
    this.hide();
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
        '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/></svg>',
      onShow(inst, animationCompleted) {
        if (!animationCompleted) {
          if (!inst.$datepicker.find('.datepicker--button-apply').length) {
            $('<span class="datepicker--button datepicker--button-apply">Применить</span>')
              .on('click', DateDropdown.handleApplyButtonClick.bind(inst))
              .appendTo(inst.$datepicker.find('.datepicker--buttons'));
          }
        }
      }
    };
  }
}

$(() => {
  $('.js-date-dropdown').each((index, node) => {
    const dateDropdown = new DateDropdown($(node));
    return dateDropdown;
  });
});
