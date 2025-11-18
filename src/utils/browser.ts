// src/utils/browser.ts
import { chromium, firefox, webkit, Browser, BrowserContext, Page } from "playwright";
import * as os from "os";

export interface LaunchResult {
    browser?: Browser;
    context: BrowserContext;
    page: Page;
}

export type BrowserType = "chromium" | "firefox" | "webkit" | "chrome-persistent";

export interface BrowserOptions {
    type: BrowserType;
    headless?: boolean;
    slowMo?: number;
    persistent?: boolean;
}

export async function launchBrowser(options: BrowserOptions): Promise<LaunchResult> {
    const { type, headless = false, slowMo = 0, persistent = false } = options;

    const commonOptions = {
        headless,
        slowMo,
        ignoreHTTPSErrors: true,
        acceptInsecureCerts: true,
    };

    let browser: Browser | undefined;
    let context: BrowserContext;
    let page: Page;

    // Ruta perfil Chrome
    const chromeDir =
        os.platform().includes("win")
            ? process.env.LOCALAPPDATA + "\\Google\\Chrome\\User Data\\Default"
            : "~/.config/chromium";

    // ⭐ Seleccionar navegador
    if (type === "chrome-persistent") {
        context = await chromium.launchPersistentContext(chromeDir, {
            ...commonOptions,
            args: ["--disable-web-security"],
        });
        page = await context.newPage();

        return {
            context,
            page,
        };
    }

    if (type === "chromium") browser = await chromium.launch(commonOptions);
    else if (type === "firefox") browser = await firefox.launch(commonOptions);
    else if (type === "webkit") browser = await webkit.launch(commonOptions);
    else browser = await chromium.launch(commonOptions);

    // Crear context y page cuando NO es persistente
    context = await browser.newContext();
    page = await context.newPage();

    return {
        browser,
        context,
        page,
    };
}
