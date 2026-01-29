# Playwright BDD Automation Framework

**Playwright + Cucumber (BDD) + TypeScript + Page Object Model + Multi-Environment**

This project is an end-to-end automation framework based on Playwright, using Cucumber to write tests in Gherkin format (Given/When/Then) and TypeScript to maximize scalability and maintainability.

## ✨ Features

* 🟦 **Page Object Model (POM)**
* 🌱 **Multi-environment execution** (.env.dev, .env.uat, etc.)
* 🧩 **Custom World** with shared variables between steps
* 🧪 **Validations** with Playwright `expect()`
* 📄 **HTML Reports** with Cucumber
* 🏷️ **Tag filtering**

---

## 📁 Project Structure
```
playwright-bdd/
│
├── config/
│   └── cucumber.js
│
├── features/
│   └── login.feature
│
├── src/
│   ├── hooks/
│   ├── page/
│   │   ├── BasePage.ts
│   │   └── LoginPage.ts
│   ├── step-definitions/
│   ├── helper/
│   │   └── env/
│   │       └── env.ts
│   └── world/
│       └── CustomWorld.ts
│
├── test-results/
│   └── reports/
│
├── .env.dev
├── .env.uat
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Installation
```bash
npm install
```

---

## 🌎 Environment Configuration (.env)

The project supports multiple environments:

* `.env.dev`
* `.env.uat`
* `.env.qa`

### Example `.env` file:
```env
BASE_URL=https://my-app.com
USER=admin
PASS=123456
HEADLESS=true
SLOWMO=0
```

### 🧠 Environment Loading System

**Responsible file:**
```
src/helper/env/env.ts
```

The `.env` file is loaded according to the `ENV` variable value:
```bash
ENV=dev
ENV=uat
```

---

## ▶️ Test Execution

### Run in UAT environment
```bash
npm run test:uat
```

### Run with specific tags
```bash
npm run test:uat -- --tags "@regression"
```

### Alternative with environment variable
```bash
ENV=uat cucumber-js --config=config/cucumber.js --tags "@smoke"
```

### Default execution
```bash
npx cucumber-js --config=config/cucumber.js
```

---

## 📄 Generate HTML Report
```bash
npm run report
```

The report is generated in:
```
test-results/reports/cucumber-report.html
```

---

## 🧱 Page Object Model (POM)

### BasePage
```typescript
export class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}
```

### LoginPage
```typescript
export class LoginPage extends BasePage {
  private txtUser = this.page.locator("#user-name");
  private txtPassword = this.page.locator("#password");
  private btnLogin = this.page.locator("#login-button");

  async login(user: string, pass: string) {
    await this.txtUser.fill(user);
    await this.txtPassword.fill(pass);
    await this.btnLogin.click();
  }
}
```

---

## 🌍 Custom World
```typescript
export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  data: Record<string, any> = {};

  constructor(options: IWorldOptions) {
    super(options);
  }
}
```

### Usage:
```typescript
this.data["token"] = "test123";
console.log(this.data["token"]);
```

---

## 🧷 Validations with Playwright
```typescript
await expect(locator).toBeVisible();
await expect(locator).toHaveText("Welcome");
```

---

## 🧩 Feature Example
```gherkin
Feature: Application Login

  @regression
  Scenario: User can authenticate
    Given the user is on the login page
    When I enter the username "standard_user" and password "secret_sauce"
    Then I should see the welcome message
```

---

## 🔧 Project Scripts
```json
"scripts": {
  "report": "start test-results/reports/cucumber-report.html",
  "test:uat": "ENV=uat cucumber-js --config=config/cucumber.js"
}
```

---

## 🛑 .gitignore
```gitignore
node_modules/
test-results/
.env*
*.log
```

---

## 📌 Requirements

* Node.js 18+
* Playwright 1.56+
* TypeScript
* Cucumber.js 12+

---

## 📝 License

This project is under the MIT license.

---

## 🤝 Contributions

Contributions are welcome. Please open an issue or pull request for suggestions or improvements.

---

## 📧 Contact

For questions or support, contact the QA Automation team.