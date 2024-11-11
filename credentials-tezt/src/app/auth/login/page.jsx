"use client";
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [error, setError] = useState(null);

    const onSubmit = handleSubmit(async (data) => {
        //console.log(data);
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        });

        if (res.error) {
            setError(res.error);
        } else {
            router.push('/playground');
            router.refresh();
        }
    });

    return (
        <div id="webcrumbs" className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[400px] bg-white rounded-lg shadow-lg min-h-[500px] p-8">
                <h1 className="text-3xl font-title text-neutral-950 mb-6 text-center">Iniciar Sesión</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-neutral-950 text-sm font-medium mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: { value: true, message: 'Ingresar un correo electrónico es obligatorio' } })}
                            className="w-full border border-neutral-300 rounded-md py-2 px-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="alguien@email.com"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-neutral-950 text-sm font-medium mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            {...register("password", { required: { value: true, message: 'Ingresar una contraseña es obligatorio' } })}
                            className="w-full border border-neutral-300 rounded-md py-2 px-3 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="*********"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <div className="mb-4 text-right">
                        <a href="#" className="text-purple-500 text-sm">
                            ¿Olvidó su contraseña?
                        </a>
                    </div>

                    <button
                        className="w-full bg-purple-500 text-white rounded-md py-2 hover:bg-purple-600 transition-colors"
                        type="submit">
                        Ingresar
                    </button>

                    <div className="p-4 mb-4 text-center">
                        <a href="#" className="text-purple-500 text-sm">
                            REGISTRARSE
                        </a>
                    </div>

                    {error && (
                        <div className="alert alert-danger mt-2 text-sm text-red-500 text-center" role="alert">
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
