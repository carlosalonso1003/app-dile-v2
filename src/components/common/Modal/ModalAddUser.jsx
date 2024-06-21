import React, { useEffect, useState } from 'react';
import "./stylesModal.css";

export default function ModalAddUser({ isOpen, onClose, user }) {
    const [agencias, setAgencias] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [cargos, setCargos] = useState([]);
    const [formData, setFormData] = useState({
        DNI: user.DNI,
        APE_PAT: user.APE_PAT,
        APE_MAT: user.APE_MAT,
        NOMBRE: user.NOMBRE,
        PASS: '',
        AGENCIA: '',
        DEPARTAMENTO: '',
        CARGO: '',
        CLUBFAMILIA: 'activado',
        EXPEDIENTES: 'activado',
        GEODILE: 'activado'
    });

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const agenciasResponse = await fetch('https://localhost/api-json-user/api/list_agencias');
                const agenciasData = await agenciasResponse.json();
                setAgencias(agenciasData);

                const departamentosResponse = await fetch('https://localhost/api-json-user/api/list_departamentos');
                const departamentosData = await departamentosResponse.json();
                setDepartamentos(departamentosData);

                const cargosResponse = await fetch('https://localhost/api-json-user/api/list_cargo');
                const cargosData = await cargosResponse.json();
                setCargos(cargosData);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost/api-json-user/api/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content w-[70%]">
                <div className='px-2 border-b-4 border-primary-800'>
                    <h2 className='mb-2 text-xl font-semibold text-primary-800'>Agregar usuario</h2>
                </div>
                <form className="w-full mx-auto" onSubmit={handleSubmit}>
                    <div className='grid grid-cols-3 gap-4 mt-4'>
                        <div>
                            <label htmlFor="dni" className="block mb-2 text-sm font-medium text-primary-900">DNI</label>
                            <input type="number" id="dni" value={formData.DNI} className="shadow-sm bg-primary-50 border border-primary-800 text-primary-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" disabled />
                        </div>
                        <div>
                            <label htmlFor="apePat" className="block mb-2 text-sm font-medium text-primary-900">APELLIDO PATERNO</label>
                            <input type="text" id="apePat" value={formData.APE_PAT} className="shadow-sm bg-primary-50 border border-primary-800 text-primary-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" disabled />
                        </div>
                        <div>
                            <label htmlFor="apeMat" className="block mb-2 text-sm font-medium text-primary-900">APELLIDO MATERNO</label>
                            <input type="text" id="apeMat" value={formData.APE_MAT} className="shadow-sm bg-primary-50 border border-primary-800 text-primary-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" disabled />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-primary-900">NOMBRE</label>
                            <input type="text" id="nombre" value={formData.NOMBRE} className="shadow-sm bg-primary-50 border border-primary-800 text-primary-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" disabled />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <div>
                            <label htmlFor="usuario" className="block mb-2 text-sm font-medium text-primary-900">USUARIO</label>
                            <input type="number" id="usuario" className="shadow-sm bg-primary-50 border border-primary-800 text-primary-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" disabled />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-primary-900">PASSWORD</label>
                            <input type="password" id="password" value={formData.PASS} onChange={handleChange} className="shadow-sm bg-primary-50 border border-primary-800 text-primary-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="*********" required />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-4'>
                        <div>
                            <label htmlFor="agencia" className="block mb-2 text-sm font-medium text-primary-800 ">AGENCIA</label>
                            <select id="agencia" value={formData.AGENCIA} onChange={handleChange} className="bg-primary-50 border border-primary-800 text-primary-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {agencias.map((agencia) => (
                                    <option key={agencia._id} value={agencia.NOMBRE}>{agencia.NUM_AGENCIA} {agencia.NOMBRE}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="departamento" className="block mb-2 text-sm font-medium text-primary-800 ">DEPARTAMENTO</label>
                            <select id="departamento" value={formData.DEPARTAMENTO} onChange={handleChange} className="bg-primary-50 border border-primary-800 text-primary-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {departamentos.map((dpto) => (
                                    <option key={dpto._id} value={dpto.NOM_DPTO}>{dpto.NUM_DPTO} {dpto.NOM_DPTO}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cargo" className="block mb-2 text-sm font-medium text-primary-800 ">CARGO</label>
                            <select id="cargo" value={formData.CARGO} onChange={handleChange} className="bg-primary-50 border border-primary-800 text-primary-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                {cargos.map((cargo) => (
                                    <option key={cargo._id} value={cargo.NOM_CARGO}>{cargo.NUM_CARGO} {cargo.NOM_CARGO}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-4 mb-4'>
                        <div>
                            <label htmlFor="menuClub" className="block mb-2 text-sm font-medium text-primary-800 ">CLUB FAMILIA</label>
                            <select id="menuClub" value={formData.CLUBFAMILIA} onChange={handleChange} className="bg-primary-50 border border-primary-800 text-primary-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="activado">ACTIVADO</option>
                                <option value="desactivado">BLOQUEADO</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="menuExpedientes" className="block mb-2 text-sm font-medium text-primary-800 ">EXPEDIENTES</label>
                            <select id="menuExpedientes" value={formData.EXPEDIENTES} onChange={handleChange} className="bg-primary-50 border border-primary-800 text-primary-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="activado">ACTIVADO</option>
                                <option value="desactivado">BLOQUEADO</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="menuGeodile" className="block mb-2 text-sm font-medium text-primary-800 ">GEO DILE</label>
                            <select id="menuGeodile" value={formData.GEODILE} onChange={handleChange} className="bg-primary-50 border border-primary-800 text-primary-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="activado">ACTIVADO</option>
                                <option value="desactivado">BLOQUEADO</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-end p-4 md:p-5 border-t border-primary-800 rounded-b">
                        <button type="submit" className="text-primary-50 bg-primary-800 hover:bg-primary-50 hover:text-primary-800 border border-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Procesar</button>
                        <button type="button" onClick={onClose} className="py-2.5 px-5 ms-3 text-sm font-medium text-red-50 focus:outline-none bg-red-500 rounded-lg border border-red-200 hover:bg-red-50 hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100">Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
