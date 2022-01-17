import { render } from 'preact'
import { App } from './app'
import '../node_modules/milligram/dist/milligram.min.css'
import './index.css'

render(<App />, document.getElementById('app'))
