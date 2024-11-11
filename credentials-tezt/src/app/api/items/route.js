/*
import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql"

export async function GET() {
    try {
        const results = await conn.query("SELECT * FROM item");
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}


export async function POST(request) {
    try {
        const { name, url_image, description} = await request.json();

        const result = await conn.query("INSERT INTO item SET ?", {
            name,
            url_image,
            description,
        });

        return NextResponse.json({
            name,
            url_image,
            description
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}


//SEARCH, half work...

export async function POST(request) {
    try {
        const data = await request.json();
        const { name } = data;

        let query = "SELECT item.name";

        if (name) {
            query += ` AND item.name LIKE '%${name}%'`;
        }

        const results = await conn.query(query);
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}

*/