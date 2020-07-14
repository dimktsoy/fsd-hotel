import $ from 'jquery';
import DropdownGuests from './DropdownGuests';
import DropdownDetails from './DropdownDetails';

import './dropdown.scss';

$(() => {
  $('.js-dropdown-guests').each((index, node) => new DropdownGuests($(node)));

  $('.js-dropdown-details').each((index, node) => new DropdownDetails($(node)));
});
