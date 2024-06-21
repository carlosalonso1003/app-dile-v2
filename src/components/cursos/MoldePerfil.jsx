export default function MoldePerfil({
    imgPerfil,
    name,
    title,
    direccion,
    telefono,
  }) {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="w-full flex flex-col 2smm:flex-row gap-4 lg:flex-col items-center justify-center  ">
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 border-2 border-primary-800 rounded-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${imgPerfil})`,
              }}
            ></div>
            <div className="text-center">
              <p className="font-light">
                <span className="font-bold text-primary-800">{name}</span>
              </p>
              <p className="font-light mt-2">
                <span className="font-light text-primary-800">{title}</span>{" "}
              </p>
            </div>
          </div>
  
          <div className="flex 2smm:justify-center items-center">
            <div className="flex flex-col space-y-4 2smm:space-y-12">
              <div className="flex flex-col space-x-0 space-y-4 2smm:flex-row justify-between 2smm:space-x-12 2smm:space-y-0">
                <div>
                  <h2 className="font-semibold text-[18px] sm:text-[20px] text-primary-800 leading-none">
                    HOLA SOY UN CURSO
                  </h2>
                  <div className="font-light text-[14px] lg:text-[16px]">
                    <p>Lunes - Viernes: 9:00 am a 6:30 pm</p>
                    <p>Sabados: 9:00 am a 1:30 pm</p>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-[18px] sm:text-[20px] text-primary-800 leading-none">
                    Dirección
                  </h2>
                  <div className="font-light text-[14px] lg:text-[16px]">
                    <p>{direccion}</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-[18px] sm:text-[20px] text-primary-800 leading-none">
                  Teléfono
                </h2>
                <div className="font-light text-[14px] lg:text-[16px]">
                  <p>{telefono}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  