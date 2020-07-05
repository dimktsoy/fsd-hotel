import $ from 'jquery';
import DateDropdown from './Date-dropdown';
import DateDropdownFilter from './Date-dropdown-filter';

import './date-dropdown.scss';

$(() => {
  $('.js-date-dropdown').each((index, node) => new DateDropdown($(node)));
});

$(() => {
  $('.js-date-dropdown-filter').each((index, node) => new DateDropdownFilter($(node)));
});
