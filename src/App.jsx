import './App.css'
import Layout from './components/layout/Layout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Inicio /></Layout>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
