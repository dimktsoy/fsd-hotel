import 'normalize.css';
import './scss/main.scss';

function importAll(r) {
  return r.keys().forEach(r);
}

importAll(require.context('./components', true, /\.js$/));
importAll(require.context('./pages', true, /\.js$/));