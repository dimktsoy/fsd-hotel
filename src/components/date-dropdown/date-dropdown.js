import 'air-datepicker';
import '../../../node_modules/air-datepicker/dist/css/datepicker.min.css';
import './date-dropdown.scss';

// const $begin = $('#datepicker-begin', '.date-dropdown'), $end = $('#datepicker-end', '.date-dropdown');
const config = {
  clearButton: 'true',
  range: 'true',
  navTitles: {
    days: 'MM yyyy'
  },
  position: 'bottom left',
  prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF" /></svg >',
  nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF" /></svg>',
  onShow(inst, animationCompleted) {
    if (!animationCompleted) {
      if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
        $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
          e.stopPropagation();
          inst.hide();
        }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
      }
    }
  }
}

const $dateDropdown = $('.date-dropdown');

const $inputStart = $dateDropdown.find('.date-dropdown__input-start');
const $inputEnd = $dateDropdown.find('.date-dropdown__input-end');

$inputStart.each(function() {
  const $this = $(this);
  $this.datepicker({ 
    range: 'true',
    navTitles: {
      days: 'MM yyyy'
    },
    clearButton: true,
    minDate: new Date(),
    multipleDatesSeparator: '-',
    onSelect: function (fd, d, picker) { 
      $this.val(fd.split('-')[0]);
      $this.closest('.date-dropdown').find('.date-dropdown__input-end').val(fd.split('-')[1]);
    }
  });
})

$inputEnd.on('click', function() {
  $(this).closest('.date-dropdown').find('.date-dropdown__input-start').focus();
});