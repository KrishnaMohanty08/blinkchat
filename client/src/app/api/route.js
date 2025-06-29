import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGO_URI;
let cachedClient = null;

async function connectToDatabase() {
    if (cachedClient) return cachedClient;
    const client = new MongoClient(uri);
    await client.connect();
    cachedClient = client;
    return client;
}
export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        const client = await connectToDatabase();
        const db = client.db("blinkchat");
        const contacts = db.collection("contacts");
        await contacts.insertOne({ name, email, message, date: new Date() })
        return new Response(
            JSON.stringify({ message: "Succesfully submiited" }),
            { status: 200 }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Failed to submit" }),
            { status: 500 }
        );
    }
}