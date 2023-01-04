import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './header'
import { Items } from './items'
import { Welcome } from './welcome'

function App() {
  return (
    <body className="app">
      <main className="content">
        <Header />
        <section className="section">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </section>
      </main>
    </body>
  )
}

export default App
