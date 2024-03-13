import { ImagemHero } from './components/Banner/styles'
import Header from './components/Header'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <ImagemHero />
    </>
  )
}

export default App
