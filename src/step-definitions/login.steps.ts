import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { LoginPage } from "../page/LoginPage";

import { config } from "../helpers/env/env";



// 👉 URL tomada desde .env
//const BASE_URL = process.env.BASE_URL

Given("que el usuario está en la página de login", async function (this: CustomWorld) {
  // Instanciamos el pageObject pasándole la page actual
  // this.data["token"] = "test";
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo(config.BASE_URL!)
 
});

When(
  "ingreso el usuario {string} y la contraseña {string}",
  async function (this: CustomWorld, username: string, password: string) {
  
    await this.loginPage.login(username, password);
    //console.log("esto se envio desde otro step" +  this.data["token"])
  }
);

Then("debo ver el mensaje de bienvenida", async function (this: CustomWorld) {
  
  const welcomeMessage = await this.page.locator(".app_logo");
   await expect(welcomeMessage).toHaveText("Swag Labs");
});
