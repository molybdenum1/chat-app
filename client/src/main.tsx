import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <App />
    </Router>,
)
