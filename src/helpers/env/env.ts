// src/helper/env/env.ts
import * as dotenv from "dotenv";
import * as path from "path";

// Objeto donde guardaremos la configuración cargada
export const config: {
    ENV?: string;
    BASE_URL?: string;
    USER?: string;
    PASS?: string;
    HEADLESS?: boolean;
    SLOWMO?: number;
} = {};


export function getEnv() {
    const env = process.env.ENV || "dev"; // default
    const envFile = `.env.${env}`;
   // const envFile = `.env`;

    //const envPath = path.resolve(process.cwd(), envFile);
     const envPath = path.resolve(__dirname, envFile);
    console.log("ruta " + envPath)

    console.log(`🔧 Cargando configuración desde: ${envFile}`);

    dotenv.config({ path: envPath });

    // Asignamos valores al objeto config
    config.ENV = env;
    config.BASE_URL = process.env.BASE_URL || "";
    config.USER = process.env.USER || "";
    config.PASS = process.env.PASS || "";
    config.HEADLESS = process.env.HEADLESS === "true";
    config.SLOWMO = Number(process.env.SLOWMO || 0);
    console.log("url " + config.BASE_URL)
}