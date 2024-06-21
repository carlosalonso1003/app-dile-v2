import React, { useEffect } from "react";

import Slider3 from "../slider/Slider3";
import "./stylesHome.css";
import "./slider-inf.css";
import "./StyleServices.css";
import { useInView } from "react-intersection-observer";
import CardInfoHome from "./CardInfoHome";
import CardServices from "./CardServices";
import CardSegura from "./CardSegura";
import Estrella from "../common/Estrella";

export default function Home() {
  const { ref: refTitle1, inView: inViewTitle1 } = useInView({
    threshold: 0.25,
  });
  const slidesInfo = [
    {
      title: "¿TIENES UNA IDEA INNOVADORA?",
      description:
        "Desde la creación de tu empresa hasta tu primer día de operaciones.¡Haz de tu visión una empresa exitosa!",
      textButton: "Ver más",
      linkPath: "https://www.clubfamiliadile.com/",
      colortexto:"primary-50",
      textcolorbutton:"primary-800",
      bgButton:"secondary-400",
    },
    {
      title: "¡VISIÓN CLARA, DECISIONES SOLIDAS!",
      description:
        "Transforma los datos en decisiones con estados financieros inteligentes.",
      textButton: "Ver más",
      linkPath: "/cuenta-especial",
      colortexto:"primary-800",
      textcolorbutton:"secondary-800",
      bgButton:"primary-800",
    },
    {
      title: "¡PARA IMPULSAR TU EQUIPO HACIA EL ÉXITO!",
      description:
        "Estamos comprometidos a potenciar el talento de tu empresa. ¡Impulsa tu negocio con nuestro apoyo experto en asesoría laboral",
      textButton: "Ver más",
      linkPath: "/cuenta-movil",
      colortexto:"primary-50",
      textcolorbutton:"primary-800",
      bgButton:"secondary-400",
    },
    {
      title: "¡SACA TU CRÉDITO DIGITAL AL TOQUE!",
      description:
        "Con un solo clic saca tu crédito desde la comodidad de tu hogar o donde quiera que te encuentres y DESEMBOLSA AL INSTANTE. ",
      textButton: "Ver más",
      linkPath: "/solicitar/digital",
      colortexto:"primary-800",
      textcolorbutton:"secondary-400",
      bgButton:"primary-800",
    },
  ];

  useEffect(() => {
    document.title = "MINKA CUSCO - Aseoria contable y laboral";
  }, []);
  return (
    <>
      <Slider3 slidesInfo={slidesInfo} />
      <div className="o_products_container_home">
        <div className="o_products_container-content">
          <div className="o_card2_title_home">
            <h2 className="">TENEMOS ESTOS SERVICIOS PARA TI</h2>
          </div>

          <div className="container-home-cards">
            <CardServices
              title={"Outsourcing Contable"}
              image={`${process.env.PUBLIC_URL}/images/outsourcing.png`}
              link={"/solicitar/credito"}
              output={false}
            />
            <CardServices
              title={"Actualización Contable"}
              image={`${process.env.PUBLIC_URL}/images/actualizacion.png`}
              link={"/cuenta-especial"}
              output={false}
            />
            <CardServices
              title={"Asesoría Financiera y Administrativa"}
              image={`${process.env.PUBLIC_URL}/images/asesoria_financiera.png`}
              link={"https://www.clubfamiliadile.com/"}
              output={true}
            />
            <CardServices
              title={"Auditoria Tributaria"}
              image={`${process.env.PUBLIC_URL}/images/auditoria_tributaria.png`}
              link={"https://www.clubfamiliadile.com/"}
              output={true}
            />
            <CardServices
              title={"Gestión de planillas"}
              image={`${process.env.PUBLIC_URL}/images/gestion_planilla.png`}
              link={"https://www.clubfamiliadile.com/"}
              output={true}
            />
          </div>
        </div>
      </div>

      <div className="o_products_container_home">
        <div className="o_products_container-content">
          <div className="o_card2_title_home">
            <h2 className="mb-8">
              NOS DIFERENCIA
            </h2>
          </div>
          <div className="w-full h-full flex">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                <Estrella
                  textNumber={"01"}
                  icon={"/images/fenix_amarillo.png"}
                  title={"Profesionales calificados y con vocación de servicio"}
                  description={
                    "Contamos con un ambiente de trabajo positivo donde promovemos la confianza, la integridad y la responsabilidad para cumplir con las expectativas de nuestros socios. "
                  }
                />
                <Estrella
                  textNumber={"02"}
                  icon={"/images/circulo_azul_2.png"}
                  title={"Responsabilidad, compromiso y resultados"}
                  description={
                    "Tenemos un equipo altamente eficiente lo que nos conduce a un mayor éxito, competitividad y rentabilidad en la cooperativa DILE, permitiéndonos agilizar procesos y estar mejor preparados para enfrentar los desafíos del mercado. "
                  }
                />
                <Estrella
                  textNumber={"03"}
                  icon={"/images/circulo_azul_3.png"}
                  title={"Responsabilidad, compromiso y resultados"}
                  description={
                    "Garantizamos que todos nuestros socios tengan la oportunidad de salir adelante a través de nuestros servicios financieros creando un ambiente donde juntos podamos superar muchas desigualdades y mejoremos la calidad de vida de nuestros más de 25 mil socios cooperativistas."
                  }
                />
                <Estrella
                  textNumber={"04"}
                  icon={"/images/circulo_azul_4.png"}
                  title={"Entrega mensual de estados financieros 100% analizados"}
                  description={
                    "Garantizamos que todos nuestros socios tengan la oportunidad de salir adelante a través de nuestros servicios financieros creando un ambiente donde juntos podamos superar muchas desigualdades y mejoremos la calidad de vida de nuestros más de 25 mil socios cooperativistas."
                  }
                />
                
              </div>
            </div>
            <div className="flex-1 hidden lg:block ">
              <div className="bg-primary-800 w-full h-full">
                <div
                  className="h-full w-full bg-no-repeat bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL
                    }${"/images/valores_minka.jpg"})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div> 
      </div>



      <div className="o_products_container_home">
        <div className="o_products_container-content">
          <div className="o_card2_title_home">
            <h2>TRABAJAMOS CON MÁS DE 20 EMPRESAS</h2>
          </div>
          <div className="contenedor-slider-inf">
            <section className="box">
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf"><CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka_blanco.png`}
            />
              </div>
              <div className="card-inf">
              <CardInfoHome
              image={`${process.env.PUBLIC_URL}/icono_minka.png`}
            /> 
              </div>

            </section>
          </div>
        </div>
      </div>
      
    </>
  );
}
