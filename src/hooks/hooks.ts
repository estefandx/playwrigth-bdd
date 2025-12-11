import { Before, After, Status, ITestCaseHookParameter  } from "@cucumber/cucumber";
import { AfterStep } from "@cucumber/cucumber";
import { launchBrowser } from "../utils/browser";
import { CustomWorld } from "../world/CustomWorld";
import { getEnv } from "../helpers/env/env";


Before(async function (this: CustomWorld) {
   getEnv();

   const isCI = process.env.CI === "true";

  // 🚀 Abrir navegador usando launchBrowser
  const { browser, context, page } = await launchBrowser({
    type: "chromium",
    headless: isCI ? true : false
  });

  // Guardamos los objetos en el World
  this.browser = browser;
  this.context = context;
  this.page = page;
});

AfterStep(async function (this: CustomWorld) {
  if (!this.page) return;

  const screenshot = await this.page.screenshot({ type: "png" });
  await this.attach(screenshot, "image/png");
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {

  // 📷 Screenshot si falló
//   if (scenario.result?.status === Status.FAILED) {
//     if (this.page) {
//       const screenshot = await this.page.screenshot({
//         path: `./screenshots/${scenario.pickle.name}.png`
//       });
//       await this.attach(screenshot, "image/png");
//     }
//   }

  // Cerrar page
  await this.page?.close();

  // Cerrar context
  await this.context?.close();

  // Cerrar browser
  await this.browser?.close?.();
});
