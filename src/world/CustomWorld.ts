import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";
import { LoginPage } from "../page/LoginPage";

export class CustomWorld extends World {
  browser!: Browser | any;
  context!: BrowserContext | any;
  page!: Page;
  parameters: any;
  data!: Record<string, any>;
 

   loginPage?: LoginPage;



  constructor(options: IWorldOptions) {
    super(options);

    // Receives parameters from cucumber.js if you use --world-parameters
    this.parameters = options.parameters || {};
    this.data  = {};
    // Initialize variables
    this.browser = undefined;
    this.context = undefined;
    this.page = undefined;
  }
}


