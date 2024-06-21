import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navBar";
import Sidebar from "../sideBar/sideBar";
import Modal from "../common/Modal/ModalAddUser";

export default function Usuarios() {
    const [users, setUser] = useState([]);
    const [error, setError] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost/api-json-socio-prueba/api/user');
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setUser(result.data); // Actualizar el estado con los datos recibidos
            } catch (error) {
                setError(error); // Actualizar el estado con el error si ocurre
            }
            };
        
            fetchData();
        }, []);


    const handleAddUser = (user) => {
            setSelectedUser(user);
            setIsModalOpen(true);
        };
    
    const handleDeleteUser=(user)=>{
        setSelectedUser(user);
        setIsModalOpen(false);
    }
        
    const handleCloseModal = () => {
            setIsModalOpen(false);
            setSelectedUser(null);
        };

    // Calcular los índices de los usuarios a mostrar en la página actual
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-2 py-3">APELLIDOS Y NOMBRE</th>
                                    <th scope="col" className="px-6 py-3">DNI</th>
                                    <th scope="col" className="px-6 py-3">AGENCIA</th>
                                    <th scope="col" className="px-6 py-3">USER SICOOP</th>
                                    <th scope="col" className="px-6 py-3">ESTADO</th>
                                    <th scope="col" className="px-6 py-3">OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user) => (
                                    <tr key={user.DNI} className="bg-white border-b hover:bg-gray-50">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id={`checkbox-table-search-${user.DNI}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                <label htmlFor={`checkbox-table-search-${user.DNI}`} className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap">{user.RAZON}</th>
                                        <td className="px-6 py-4">{user.DNI}</td>
                                        <td className="px-6 py-4">{user.NOM_AGENCIA}</td>
                                        <td className="px-6 py-4">{user.USER}</td>
                                        <td className="px-6 py-4">{user.ESTADO==1?<div class="flex items-center"><div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo</div>:<div class="flex items-center"><div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> DESACTIVADO</div>}</td>
                                        <td className="px-6 py-4">
                                            <div className="grid grid-cols-4 gap-2">
                                                <button onClick={() => handleAddUser(user)}>
                                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C3.79086 0 2 1.79086 2 4C2 6.20914 3.79086 8 6 8C8.20914 8 10 6.20914 10 4C10 1.79086 8.20914 0 6 0ZM4 9C1.79086 9 0 10.7909 0 13V14C0 15.1046 0.895431 16 2 16H10C11.1046 16 12 15.1046 12 14V13C12 10.7909 10.2091 9 8 9H4ZM12 8C12 7.44772 12.4477 7 13 7H14V6C14 5.44772 14.4477 5 15 5C15.5523 5 16 5.44772 16 6V7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H16V10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10V9H13C12.4477 9 12 8.55229 12 8Z" fill="#02518c"/>
                                                    </svg>
                                                </button>
                                                <button onClick={()=>handleDeleteUser(user)}>
                                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4ZM0 13C0 10.7909 1.79086 9 4 9H8C10.2091 9 12 10.7909 12 13V14C12 15.1046 11.1046 16 10 16H2C0.895431 16 0 15.1046 0 14V13ZM13 7C12.4477 7 12 7.44772 12 8C12 8.55229 12.4477 9 13 9H17C17.5523 9 18 8.55229 18 8C18 7.44772 17.5523 7 17 7H13Z" fill="#EF0626"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4C10 4.44133 9.92853 4.86597 9.79652 5.26297L7.26297 7.79652C6.86597 7.92853 6.44133 8 6 8C3.79086 8 2 6.20914 2 4ZM6.05949 9H4C1.79086 9 0 10.7909 0 13V14C0 15.1046 0.895431 16 2 16H4.17157C3.99406 15.4979 3.95065 14.9499 4.05823 14.4118L4.73245 11.0397C4.84859 10.4589 5.13407 9.92543 5.55291 9.50659L6.05949 9Z" fill="#20A61B"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0922 4C14.7103 4 14.3321 4.07524 13.9793 4.22142C13.6266 4.36757 13.3059 4.58192 13.036 4.85194L6.96712 10.9208C6.82751 11.0604 6.73235 11.2382 6.69364 11.4318L6.01941 14.8039C5.95386 15.1318 6.05648 15.4707 6.29289 15.7071C6.5293 15.9435 6.86822 16.0461 7.19606 15.9806L10.5682 15.3064C10.7618 15.2677 10.9396 15.1725 11.0792 15.0329L17.1482 8.96388C17.4182 8.69392 17.6324 8.37342 17.7786 8.02068C17.9248 7.66788 18 7.28973 18 6.90784C18 6.52595 17.9248 6.1478 17.7786 5.79499C17.6324 5.44219 17.4181 5.12164 17.1481 4.85166C16.8781 4.5817 16.5577 4.36754 16.205 4.22142C15.8522 4.07524 15.474 4 15.0922 4Z" fill="#20A61B"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.895431 16 2 16H18C19.1046 16 20 15.1046 20 14V2C20 0.89543 19.1046 0 18 0H2ZM12 5C12 4.44772 12.4477 4 13 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H13C12.4477 6 12 5.55228 12 5ZM12 8C12 7.44772 12.4477 7 13 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H13C12.4477 9 12 8.55228 12 8ZM12 11C12 10.4477 12.4477 10 13 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H13C12.4477 12 12 11.5523 12 11ZM4.00001 6C4.00001 4.34315 5.34315 3 7.00001 3C8.65686 3 10 4.34315 10 6C10 7.65685 8.65686 9 7.00001 9C5.34315 9 4.00001 7.65685 4.00001 6ZM5.94153 10C4.65023 10 3.50382 10.8263 3.09548 12.0513L3.05132 12.1838L3.04724 12.196C3.00516 12.3222 2.99152 12.3631 3.00501 12.3908C3.01149 12.4041 3.02423 12.4143 3.04307 12.4295C3.07467 12.4549 3.12346 12.4941 3.18877 12.5847C3.37672 12.8455 3.67856 13 4.00001 13H10C10.3215 13 10.6233 12.8455 10.8112 12.5847C10.8766 12.4941 10.9253 12.4549 10.9569 12.4295C10.9758 12.4143 10.9885 12.4041 10.995 12.3908C11.0085 12.3631 10.9949 12.3222 10.9528 12.1961L10.9528 12.196L10.9487 12.1838L10.9045 12.0513C10.4962 10.8263 9.34978 10 8.05849 10H5.94153Z" fill="#E79F10"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {selectedUser && (
                            <Modal isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
                        )}
                         <nav className="flex items-center justify-between py-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500">Mostrando <span className="font-semibold text-gray-900">{indexOfFirstUser + 1}-{indexOfLastUser}</span> de <span className="font-semibold text-gray-900">{users.length}</span></span>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <button
                                        onClick={() => paginate(currentPage - 1)}
                                        className="px-3 py-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                </li>
                                {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
                                    <li key={number + 1}>
                                        <button
                                            onClick={() => paginate(number + 1)}
                                            className={`px-3 py-1 leading-tight ${currentPage === number + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                                        >
                                            {number + 1}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={() => paginate(currentPage + 1)}
                                        className="px-3 py-1 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                                        disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}