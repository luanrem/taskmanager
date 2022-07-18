import { GlobalStyle } from './styles/GlobalStyle'

// import { Greetings } from './components/Greetings'
import { Lists } from './screen/Lists'
import { CurrentList } from './screen/CurrentList'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Lists />
      <CurrentList />
    </>
  )
}