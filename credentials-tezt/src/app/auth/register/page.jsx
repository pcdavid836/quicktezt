"use client";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import "./style.css";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.passwordConfirm) {
            return alert("Las contraseñas no coinciden");
        }

        // Formatear la fecha
        const birthdayDate = new Date(data.birthday); 
        data = { ...data, birthday: birthdayDate };

        
        //console.log(data);

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            router.push('/auth/login');
        }
    });

    const [startDate, setStartDate] = useState(null); const handleDateChange = (date) => { setStartDate(date); setValue('birthday', date); };

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[500px] bg-white rounded-lg shadow-lg flex flex-col p-8 m-3">
                <h1 className="text-3xl font-title text-neutral-950 mb-6">Registrarse</h1>
                <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-neutral-950 mb-2">Correo electronico:</label>
                        <input type="email" id="email" {...register("email", { required: { value: true, message: 'Ingresar un correo electronico es obligatorio' } })} className="w-full p-3 rounded-md border border-neutral-300" placeholder="ejemplo123@email.com" />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-neutral-950 mb-2">Nombre de usuario</label>
                        <input type="text" id="username" {...register("username", { required: { value: true, message: 'Se requiere nombre de usuario' } })} className="w-full p-3 rounded-md border border-neutral-300" placeholder="Matatenas123" />
                        {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-neutral-950 mb-2">Nombre/s</label>
                        <input type="text" id="name" {...register("name", { required: { value: true, message: 'Ingrese su nombre por favor' } })} className="w-full p-3 rounded-md border border-neutral-300" placeholder="Juan" />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="lastname" className="block text-neutral-950 mb-2">Apellido/s</label>
                        <input type="text" id="lastname" {...register("lastname", { required: { value: true, message: 'Ingrese su apellido por favor' } })} className="w-full p-3 rounded-md border border-neutral-300" placeholder="Lopez" />
                        {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-neutral-950 mb-2">Contraseña</label>
                        <input type="password" id="password" {...register("password", { required: { value: true, message: 'Ingresar una contraseña es obligatoria' } })} className="w-full p-3 rounded-md border border-neutral-300" placeholder="********" />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-neutral-950 mb-2">Repite tu Contraseña</label>
                        <input type="password" id="passwordConfirm" {...register("passwordConfirm", { required: { value: true, message: 'repita su contraseña por favor' } })} className="w-full p-3 rounded-md border border-neutral-300" placeholder="********" />
                        {errors.passwordConfirm && <span className="text-red-500">{errors.passwordConfirm.message}</span>}
                    </div>
                    <div className="flex items-center mb-6">
                        <label htmlFor="birthday" className="block text-neutral-950 mb-2">Fecha de nacimiento:</label>
                        <div className="w-full">
                            <DatePicker
                                selected={startDate}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                className="w-full p-3 rounded-md border border-neutral-300"
                                placeholderText="Selecciona tu fecha de nacimiento"
                            />
                            {errors.birthday && <span className="text-red-500">{errors.birthday.message}</span>}
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <label htmlFor="gender" className="block text-neutral-950 mb-2 mr-2">Género:</label>
                        <select id="gender" {...register("gender", { required: { value: true, message: 'Seleccione una opcion' } })} className="w-full p-3 rounded-md border border-neutral-300">
                            <option value="">Seleccione su género</option>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                            <option value="X">Otro</option>
                        </select>
                        {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
                    </div>
                    <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-md">Crear nuevo usuario</button>
                </form>
                <p className="text-neutral-950 mt-6 text-center">
                    ¿Ya tienes una cuenta? <a href="/auth/login" className="text-purple-600 underline">Iniciar sesión</a>
                </p>
            </div>
        </main>
    );
}

export default RegisterPage;
