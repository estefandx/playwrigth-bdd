// src/helper/env/env.ts
import * as dotenv from "dotenv";
import * as path from "path";

// Object where we will save the loaded configuration
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
    console.log("path " + envPath)

    console.log(`🔧 Loading configuration from: ${envFile}`);

    dotenv.config({ path: envPath });

    // Assign values to the config object
    config.ENV = env;
    config.BASE_URL = process.env.BASE_URL || "";
    config.USER = process.env.USER || "";
    config.PASS = process.env.PASS || "";
    config.HEADLESS = process.env.HEADLESS === "true";
    config.SLOWMO = Number(process.env.SLOWMO || 0);
    console.log("url " + config.BASE_URL)
}