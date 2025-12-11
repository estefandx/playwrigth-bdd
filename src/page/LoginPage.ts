import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private txtUser: Locator;
    private txtPassword: Locator;
    private btnLogin: Locator;

    constructor(page: Page) {
        super(page)

       
        this.txtUser = this.page.locator("#user-name");
        this.txtPassword = this.page.locator("#password");
        this.btnLogin = this.page.locator("#login-button");
    }

    async login(username:string,password:string){
          await this.txtUser.fill(username);
          await this.txtPassword.fill(password);
           await this.btnLogin.click();

           
    }



  

    

   

   
}