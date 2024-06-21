import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({image,title,link,description}) {
    return (
        <div className="max-w-sm bg-secondary-100 border border-primary-200 rounded-lg shadow">
            <img className="rounded-t-lg" src={image} alt="Blog" />
            <div className="p-5">
                <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-800">
                    {title}
                </h5>
                </a>
                <p className="mb-3 font-normal text-primary-800">
                {description}
                </p>
                <Link
                to={link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                Ingresar
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                </Link>
            </div>
        </div>
    );
}
