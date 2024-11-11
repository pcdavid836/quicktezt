/*
import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";


export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const result = await conn.query("UPDATE item SET ? WHERE id = ?", [
            data,
            params.id,
        ]);
        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    message: "item no encontrado",
                },
                {
                    status: 404,
                }
            );
        }
        const updatedItem = await conn.query("SELECT * FROM item WHERE id = ?", [params.id]);

        return NextResponse.json(updatedItem[0]);
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
            { status: 500 }
        );
    }
}


export async function DELETE(request, { params }) {
    try {
        const data = await request.json();
        const result = await conn.query("DELETE item WHERE id = ?", [
            data,
            params.id,
        ]);
        if (result.affectedRows === 0) {
            return NextResponse.json(
                {
                    message: "item no encontrado",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json("item deleted");
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
            { status: 500 }
        );
    }
}
*/