import mongoose from 'mongoose';
const MONGOODB_URL = process.env.MONGOODB_URL;
let cashed = (global as any).mongoose || { conn: null, promise: null };
export const connectToDatabase=async () => {
    if (cashed.conn) return cashed.conn;
    if (!MONGOODB_URL) throw new Error("MONGOODB_URL is missing");
    cashed.promise = cashed.promise || mongoose.connect(MONGOODB_URL, { dbName: "evently", bufferCommands: false, })
    cashed.conn = await cashed.promise;
    return cashed.conn;
}