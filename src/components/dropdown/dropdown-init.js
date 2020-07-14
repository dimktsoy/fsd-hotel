import $ from 'jquery';
import DropdownGuests from './DropdownGuests';
import DropdownDetails from './DropdownDetails';

import './dropdown.scss';

$(() => {
  $('.js-dropdown-guests').each((index, node) => {
    const dropdown = new DropdownGuests($(node));
    return dropdown;
  });

  $('.js-dropdown-details').each((index, node) => {
    const dropdown = new DropdownDetails($(node));
    return dropdown;
  });
});
