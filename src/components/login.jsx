import React, { useState } from "react";

export default function Login() {
  const [user, setUsuario] = useState('');
  const [pass, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://localhost/api-json-user/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user, pass: pass })
      });

      const data = await response.json();
      console.log(data[0]['message']);

      if (response.ok) {
        // Guardar el token en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(data[0]));
        // Redirigir a otra página
        window.location.href = '/home';
      } else {
        // Manejo de error de autenticación
        setError(data.message || 'Usuario o contraseña incorrecta');
      }
    } catch (err) {
      setError('Error de red. Inténtalo más tarde');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-primary-800">
      <div className="w-full bg-primary-100 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="flex justify-center mt-10">
          <img className="w-[50%] mr-2" src="../images/logo1.png" alt="logo" />
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-primary-800 md:text-2xl">
            Iniciar Sesión
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user" className="block mb-2 text-sm font-medium text-primary-800">Tu usuario</label>
              <input
                type="number"
                name="user"
                id="user"
                className="bg-primary-50 border border-primary-800 text-primary-800 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="ingrese usuario"
                required value={user}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pass" className="block mb-2 text-sm font-medium text-primary-800">Contraseña</label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="••••••••"
                className="bg-primary-50 border border-primary-800 text-primary-800 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                required value={pass}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-primary-800 rounded bg-primary-50 focus:ring-3 focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-primary-500">Recuérdame</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-primary-800 hover:underline">Olvidé la contraseña</a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white bg-primary-800 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
            {error && <p className="text-sm font-light text-red-700">{error}</p>}
            <p className="text-sm font-light text-gray-500">
              ¿No tienes una cuenta? <a href="#" className="font-medium text-primary-800 hover:underline">Registrar</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}