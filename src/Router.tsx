import { Navigate, Route, Routes } from "react-router-dom";
import { Crm } from "./pages/Crm";
import Customers from "./pages/Customers";
import { Finance } from "./pages/Finance";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
// import Teste from "./components/Teste";

export function Router() {
  return (
    <Routes>
      <Route path="/resumo" element={<Home />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/crm" element={<Crm />} />
      <Route path="/financeiro" element={<Finance />} />
      <Route path="/clientes" element={<Customers />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/teste" element={<Teste />} /> */}
    </Routes>
  );
}