import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyle.scss"
import Home from "./pages/home/Home";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import Mentoria from "./pages/mentoria/mentoria";
import Eventos from "./pages/eventos/eventos";
import Usuario from "./pages/usuario/Usuario";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Doacao/>} />
        <Route path="/" element={<Voluntariado/>} />
        <Route path="/" element={<Mentoria/>} />
        <Route path="/" element={<Eventos/>} />
        <Route path="/" element={<Usuario/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;