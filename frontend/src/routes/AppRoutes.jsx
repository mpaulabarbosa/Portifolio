import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";
import PaginaPrincipal from "../components/PaginaPrincipal";
import DetalhesProjeto from "../components/DetalhesProjeto";

export default function AppRoutes() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<PaginaPrincipal />} />
<Route path="/projeto/:id" element={<DetalhesProjeto />} />
</Routes>
</BrowserRouter> 
)}