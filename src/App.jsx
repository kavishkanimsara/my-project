import './App.css'

import ThemeContextProvider from './context/ThemeContext'
import ToggleTheme from './assets/Components/ToggleTheme'
import AuthContextProvider from './context/AuthContext'
import BookList from './assets/Components/BookList'
import Navbar from './assets/Components/Navbar'
import BookContextProvider from './context/BookContext'

function App() {

  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookContextProvider>
          <BookList/>
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
  