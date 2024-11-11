'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';



function VehicleCard({ item }) {
    const [reqName, setReqName] = useState({
        name: "",
        description: "",
        Marca: "",
    });

    const router = useRouter();

    const deleteVehicle = async () => {
        setToDelete({ Estado: 0 });
        const res = await axios.put("/api/items/" + item.id, toDelete);
        toggleAll(true);
        router.refresh();
    }


    return (
        <div id="webcrumbs">
            <div className="w-[400px] bg-white shadow-lg rounded-lg p-6">  <h2 className="text-xl font-title text-neutral-950 mb-4">{item.name}</h2>
                <img
                    src={item.url_iamge}
                    alt="Card Image"
                    className="w-[400px] h-[200px] object-cover rounded-md mb-4"
                />
                <p className="text-neutral-950 mb-2">{item.description}</p>
                <p className="text-sm text-neutral-500 mb-6">{item.CreationDate}</p>
                <div className="flex gap-4">
                    <Link href={`/dashboard/options/vehicles/vehiclesMOD/${item.idVehiculo}`} >
                        <button className="bg-primary-500 text-primary-50 rounded-md h-[40px] w-[100px]">Modificar</button>
                    </Link>
                    <button className="bg-red-500 text-primary-50 rounded-md h-[40px] w-[100px]"  onClick={deleteVehicle}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}


export default VehicleCard;
