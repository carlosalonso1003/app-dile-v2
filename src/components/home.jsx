import React , { useEffect, useState }from "react";
import { useNavigate  } from "react-router-dom";
import CardHome from "./common/card/CardHome";

export default function Home(){
    const [userData, setUserData] = useState(null);
    const history = useNavigate ();

    useEffect(() => {
        // Recuperar los datos del usuario desde el almacenamiento local
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleLogout = () => {
        // Limpiar los datos del usuario del almacenamiento local
        localStorage.removeItem('userData');
        // Redirigir al usuario a la página de inicio de sesión
        history.push('/');
    };

    const cards = [
            {
            id: 1,
            title: "CLUB FAMILIA DILE",
            image: `${process.env.PUBLIC_URL}/images/administradores_logo.png`,
            link: "/club-familia/inicio",
            description: "Club de beneficios para socios de la Cooperativa DILE",
            requiredPermission: userData ? userData.club_familia[0].inicio : null
            },
            {
            id: 2,
            title: "GEO DILE",
            image: `${process.env.PUBLIC_URL}/images/administradores_logo.png`,
            link: "/geo-dile/inicio",
            description: "Sistema de geolocalización de socios de la Cooperativa DILE",
            requiredPermission: userData ? userData.geo_dile[0].inicio : null
            },
            {
            id: 3,
            title: "EXPEDIENTES",
            image: `${process.env.PUBLIC_URL}/images/administradores_logo.png`,
            link: "/expedientes/inicio",
            description: "Sistema de control de expedientes de desembolsos de la Cooperativa DILE",
            requiredPermission: userData ? userData.expediente[0].inicio : null
            },
            {
            id: 4,
            title: "DASH-ADMIN",
            image: `${process.env.PUBLIC_URL}/images/administradores_logo.png`,
            link: "/administrador/inicio",
            description: "Modulo administrativo APP-DILE",
            requiredPermission: userData ? userData.expediente[0].inicio : null
            }
        ];

        return (
            <>
                {userData ? (
                    <>
                    <div className="w-full flex flex-col items-center justify-center bg-primary-800">
                        <div className="w-[80%] inline-flex rounded-xl my-4">
                            <div className="w-10/12  m-4">
                                <h2 className="text-primary-50 font-bold">
                                    BIENVENIDO{" "}
                                    <span className="font-light">
                                    {userData.NOMBRE} {userData.APE_PAT} {userData.APE_MAT}
                                    </span>
                                </h2>
                                <p className="text-primary-50 font-bold">
                                    USUARIO: <span className="font-light">{userData.DNI}</span>
                                </p>
                                <p className="text-primary-50 font-bold">
                                    CARGO: <span className="font-light">{userData.CARGO}</span>
                                </p>
                                <p className="text-primary-50 font-bold">
                                    AGENCIA: <span className="font-light">{userData.AGENCIA}</span>
                                </p>
                            </div>
                            <div className="w-2/12  m-4">
                            <button 
                                    onClick={handleLogout} 
                                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                >
                                    Cerrar Sesión
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-4 px-6 mx-auto w-screen h-screen bg-primary-50">
                        <div className="w-[80%] grid grid-cols-4 gap-6">
                            {cards.map((card) => (
                            card.requiredPermission=="activo" ? (
                                <CardHome
                                key={card.id}
                                title={card.title}
                                image={card.image}
                                link={card.link}
                                description={card.description}
                                output={false}
                                />
                            ) : (
                                <div key={card.id} className="card disabled">
                                <h2>{card.title} {userData.club_familia[0].inicio}{card.requiredPermission}(No autorizado)</h2>
                                </div>
                            )
                            ))}
                        </div>
                    </div>
                    </>
                ) : (
                    <p>Volver a iniciar Sesión</p>
                )}
            </>
            );
};