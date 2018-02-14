import {app} from 'hyperapp';
import './index.css';
import state from './state'
import actions from './actions'
import view from './App';
import registerServiceWorker from './registerServiceWorker';

app(state, actions, view, document.getElementById('root'));
registerServiceWorker();
