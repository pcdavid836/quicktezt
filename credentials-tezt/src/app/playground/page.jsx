"use client";
import React, { useState, useEffect } from 'react'
import Cardplay from '@/components/Card4play/Cardplay';
import axios from 'axios';
import "./style.css";

async function loadItems() {
    const { data } = await axios.get(`/api/items`);
    return data;
}


function Playgroundpage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems().then(setItems);
    }, []);

    return (
        <div>
            <div className="w-full bg-black rounded-lg shadow-lg h-[70px] flex items-center justify-end pr-6">
                <nav className="flex gap-4">
                    <button className="bg-blue-500 rounded-md text-white px-4 py-2">
                        Añadir item
                    </button>
                    <button className="bg-blue-500 rounded-md text-white px-4 py-2" onClick={() => signOut()}>
                        Cerrar sesión
                    </button>
                </nav>
            </div>
            <div>
                <p>busqueda...</p>
            </div>
            <div className="row mt-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="col mb-4 mx-auto">
                            <Cardplay item={item} />
                        </div>
                    ))
                ) : (
                    <div className="d-flex justify-content-center w-100">
                        <h6>No se encontró ningún item.</h6>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Playgroundpage