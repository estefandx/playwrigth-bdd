import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { LoginPage } from "../page/LoginPage";

import { config } from "../helpers/env/env";



// 👉 URL taken from .env
//const BASE_URL = process.env.BASE_URL

Given("the user is on the login page", async function (this: CustomWorld) {
  // Instantiate the pageObject passing the current page
  // this.data["token"] = "test";
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo(config.BASE_URL!)
 
});

When(
  "I enter the username {string} and password {string}",
  async function (this: CustomWorld, username: string, password: string) {
  
    await this.loginPage.login(username, password);
    //console.log("this was sent from another step" +  this.data["token"])
  }
);

Then("I should see the welcome message", async function (this: CustomWorld) {
  
  const welcomeMessage = await this.page.locator(".app_logo");
   await expect(welcomeMessage).toHaveText("Swag Labs");
});

Then('I should see an error', async function (this: CustomWorld)  {
   const welcomeMessage = await this.page.locator(".app_logo");
   await expect(welcomeMessage).toHaveText("Swag Labsdd");
})
