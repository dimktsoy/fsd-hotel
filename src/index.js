import 'normalize.css';
import './scss/main.scss';

import './assets/favicons/favicons';

function importAll(r) {
  return r.keys().forEach(r);
}

importAll(require.context('./components', true, /\.js$/));
importAll(require.context('./pages', true, /\.js$/));
