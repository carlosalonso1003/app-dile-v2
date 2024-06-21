import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagaDiario from "./components/creditos/PagaDiario";
import MasInclusivo from "./components/creditos/MasInclusivo";
import ScrollTop from "./components/common/ScrollTop";
import Rapidin from "./components/creditos/Rapidin";
import CreditoDigital from "./components/creditos/CreditoDigital";
import CuentaMovil from "./components/creditos/CuentaMovil";
import CuentaEspecial from "./components/creditos/CuentaEspecial";


import Login from "./components/login";
import Home from "./components/home";
import GeoDile from "./components/geoDile/inicio";
import ClubfamiliaDile from "./components/clubFamiliadile/inicio";
import Expedientes from "./components/expedientes/inicio";


//ROUTER ADMINISTRADOR
import Administrador from "./components/Administrador/inicio";
import Usuarios from "./components/Administrador/usuarios";


//RUTA AÑO
import Año from "./components/expedientes/año";

import Nosotros from "./components/home/Nosotros";
import Agencias from "./components/agencias/Agencias";
import FormPagoDiario from "./components/home/FormPagoDiario";
import CustomPage from "./components/common/CustomPage";
import FormMasInclusivo from "./components/home/FormMasInclusivo";
import FormDigital from "./components/home/FormDigital";
import FormRapidin from "./components/home/FormRapidin";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import FormGeneral from "./components/home/FormGeneral";
import Cursos from "./components/cursos/Cursos";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <>
          <ScrollTop />

          <Routes>
            <Route
              exact
              path="/"
              element={<Login/>}
            />

            <Route
              exact
              path="/home"
              element={<Home/>}
            />

            <Route exact path="/club-familia/inicio" element={<ClubfamiliaDile/>}/>
            <Route exact path="/geo-dile/inicio" element={<GeoDile/>}/>
            <Route exact path="/expedientes/inicio" element={<Expedientes/>}/>
            {/* ROUTER ADMINISTRADOR */}
            <Route exact path="/administrador/inicio" element={<Administrador/>}/>
            <Route exact path="/administrador/usuario" element={<Usuarios/>} />

            {/**RUTA PRUEBA */}
            <Route exact path="expediente/año" element={<Año/>}/>

            <Route
              exact
              path="/credito-pago-diario"
              element={<CustomPage component={<PagaDiario />} />}
            />


            <Route
              exact
              path="/credito-mas-inclusivo"
              element={<CustomPage component={<MasInclusivo />} />}
            />
            <Route
              exact
              path="/credito-rapidin"
              element={<CustomPage component={<Rapidin />} />}
            />
            <Route
              exact
              path="/credito-digital"
              element={<CustomPage component={<CreditoDigital />} />}
            />
            <Route
              exact
              path="/cuenta-movil"
              element={<CustomPage component={<CuentaMovil />} />}
            />
            <Route
              exact
              path="/cuenta-especial"
              element={<CustomPage component={<CuentaEspecial />} />}
            />
            <Route exact path="/solicitar/credito" element={<FormGeneral />} />
            <Route
              exact
              path="/solicitar/pago-diario"
              element={<FormPagoDiario />}
            />
            <Route
              exact
              path="/solicitar/mas-inclusivo"
              element={<FormMasInclusivo />}
            />
            <Route exact path="/solicitar/rapidin" element={<FormRapidin />} />
            <Route exact path="/solicitar/digital" element={<FormDigital />} />
            <Route
              exact
              path="/agencias"
              element={<CustomPage component={<Agencias />} />}
            />
            <Route
              exact
              path="/cursos"
              element={<CustomPage component={<Cursos />} />}
            />
            <Route
              exact
              path="/nuestra-historia/nosotros"
              element={<CustomPage component={<Nosotros />} />}
            />
            <Route
              path="*"
              element={
                <div>
                  <p>Error 404</p>
                </div>
              }
            />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
