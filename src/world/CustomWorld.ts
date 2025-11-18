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

    // Recibe parámetros desde cucumber.js si usas --world-parameters
    this.parameters = options.parameters || {};
    this.data  = {};
    // Inicializar variables
    this.browser = undefined;
    this.context = undefined;
    this.page = undefined;
  }
}


