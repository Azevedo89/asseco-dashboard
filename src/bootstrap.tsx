/* global document */
import { createRoot } from 'react-dom/client'
import './i18n'
import Root from './root'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Root />)
