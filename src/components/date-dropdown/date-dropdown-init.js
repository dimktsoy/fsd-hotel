import $ from 'jquery';
import DateDropdown from './DateDropdown';
import DateDropdownFilter from './DateDropdownFilter';

import './date-dropdown.scss';

$(() => {
  $('.js-date-dropdown').each((index, node) => new DateDropdown($(node)));
});

$(() => {
  $('.js-date-dropdown-filter').each((index, node) => new DateDropdownFilter($(node)));
});
