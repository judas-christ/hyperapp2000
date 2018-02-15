import { app, h } from 'hyperapp'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  app({}, {}, App, div)
})
