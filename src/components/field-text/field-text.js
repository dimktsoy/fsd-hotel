import Inputmask from "inputmask";
import $ from 'jquery';

import './field-text.scss';

$(() => {
  $('.js-field-text-mask').each((index, node) => {
    const im = new Inputmask();
    im.mask(node);
  });
});