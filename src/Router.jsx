import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inicio } from './Componentes/Inicio'
import { CriarCiclo } from './CriarCiclo'
import { Menu } from './Componentes/Menu'
import { CriarConta } from './Componentes/Criar Conta/CriarConta'
import { GerenciarCiclo } from './GerenciarCiclo'

export function ApplicationRoutes () {
    return (
        <BrowserRouter>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/criarciclo" element={<CriarCiclo/>}></Route>
        <Route path='/gerenciar' element={<GerenciarCiclo />}></Route>
        <Route path="/conta" element={<CriarConta />}></Route>
        </Routes>
        </BrowserRouter>
    )

}