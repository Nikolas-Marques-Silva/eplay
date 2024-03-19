import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Router from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Router />
    </BrowserRouter>
  )
}

export default App
