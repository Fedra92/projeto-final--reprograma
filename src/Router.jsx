import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inicio } from './Componentes/Inicio'
import { CriarCiclo } from './CriarCiclo'
import { Menu } from './Componentes/Menu'
import { CriarConta } from './Componentes/Criar Conta/CriarConta'

export function ApplicationRoutes () {
    return (
        <BrowserRouter>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/criarciclo" element={<CriarCiclo/>}></Route>
        <Route path='/gerenciar' element={<h1>Gerenciar Ciclo</h1>}></Route>
        <Route path="/conta" element={<CriarConta />}></Route>
        </Routes>
        </BrowserRouter>
    )

}