import { useEffect, useState } from "react";

import Spinner from "../../Spinner";

export default function CustomPage({ component }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga asincrónica (puedes reemplazar esto con tu lógica real)
    setTimeout(() => {
      setLoading(false); // Detener el spinner después de 2 segundos (simulación)
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <>
          <div>
            <div className="slide-1"></div>
            <div className="slide-2"></div>
            <div className="slide-3"></div>
            <div className="slide-4"></div>
            <Spinner />
          </div>
        </>
      ) : (
        <>

        </>
      )}
    </div>
  );
}
