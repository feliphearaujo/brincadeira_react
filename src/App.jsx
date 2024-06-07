import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import History from './Components/History'
import Mission from './Components/Mission'
import Contact from './Components/Contact'
import Footer from './Components/Footer'  
import { Product } from "./Components/Products"

function App() {

  return (
    <>
    <Header />
      <Routes>
          <Route path = "/" element={<Home 
          nomePagina = "Página Inicial"
          descricao = "Detalhamento de toda a página"
          />} />
          
          <Route path = "Mission" element={<Mission 
          nomePagina =  "Página Missão" 
          descricao = "Missão da empresa"
          />} />
          
          <Route path = "History" element={<History
          nomePagina = "Página História"
          descricao = "História da empresa"
          />} />
          
          <Route path="Contact" element={<Contact 
          nomePagina = "Página Contato"
          descricao = "Informações de contato"
          endereco = "Rua das Tulipas, 567, Bairro Seresta, Floresta"
          telefone = "(11)99999-9999"
          />} />
          
          <Route path="Products" element={<Product 
          nomePagina = "Página Produtos"
          descricao = "Produtos da empresa"
          />} />
      </Routes>
    <Footer />
    
    </>
  )
}

export default App
