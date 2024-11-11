import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import db from '@/libs/db';

export async function POST(request) {
    try {
        const data = await request.json();
        //console.log("Datos recibidos:", data);

        const userFound = await db.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (userFound) {
            return NextResponse.json({
                message: "Ese correo electronico ya existe"
            }, {
                status: 400
            });
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        //console.log("Contraseña hasheada:", hashedPassword);

        const newUser = await db.user.create({
            data: {
                email: data.email,
                username: data.username,
                password: hashedPassword,
                birthday: data.birthday,
                gender: data.gender,
                name: data.name,
                lastname: data.lastname
            }
        });

        const { password: _, ...user } = newUser;
        return NextResponse.json(user);

    } catch (error) {
        console.error(error.message);
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
