import { app } from 'hyperapp'
import actions from './actions'
import view from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import state from './state'

app(state, actions, view, document.getElementById('root'))
registerServiceWorker()
