# Playwright BDD Automation Framework

**Playwright + Cucumber (BDD) + TypeScript + Page Object Model + Multi-Environment**

Este proyecto es un framework de automatización end-to-end basado en Playwright, utilizando Cucumber para escribir pruebas en formato Gherkin (Given/When/Then) y TypeScript para maximizar escalabilidad y mantenibilidad.

## ✨ Características

* 🟦 **Page Object Model (POM)**
* 🌱 **Ejecución por ambientes** (.env.dev, .env.uat, etc.)
* 🧩 **Custom World** con variables compartidas entre steps
* 🧪 **Validaciones** con Playwright `expect()`
* 📄 **Reportes HTML** con Cucumber
* 🏷️ **Filtro por tags**

---

## 📁 Estructura del Proyecto
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

## ⚙️ Instalación
```bash
npm install
```

---

## 🌎 Configuración de Ambientes (.env)

El proyecto soporta múltiples ambientes:

* `.env.dev`
* `.env.uat`
* `.env.qa`

### Ejemplo de archivo `.env`:
```env
BASE_URL=https://mi-app.com
USER=admin
PASS=123456
HEADLESS=true
SLOWMO=0
```

### 🧠 Sistema de carga de entorno

**Archivo responsable:**
```
src/helper/env/env.ts
```

El archivo `.env` se carga de acuerdo al valor de la variable `ENV`:
```bash
ENV=dev
ENV=uat
```

---

## ▶️ Ejecución de Pruebas

### Ejecutar en ambiente UAT
```bash
npm run test:uat
```

### Ejecutar con tags específicos
```bash
npm run test:uat -- --tags "@regresion"
```

### Alternativa con variable de entorno
```bash
ENV=uat cucumber-js --config=config/cucumber.js --tags "@smoke"
```

### Ejecución por defecto
```bash
npx cucumber-js --config=config/cucumber.js
```

---

## 📄 Generar Reporte HTML
```bash
npm run report
```

El reporte se genera en:
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

### Uso:
```typescript
this.data["token"] = "test123";
console.log(this.data["token"]);
```

---

## 🧷 Validaciones con Playwright
```typescript
await expect(locator).toBeVisible();
await expect(locator).toHaveText("Bienvenido");
```

---

## 🧩 Ejemplo de Feature
```gherkin
Feature: Login aplicación

  @regresion
  Scenario: Usuario puede autenticarse
    Given que el usuario está en la página de login
    When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    Then debo ver el mensaje de bienvenida
```

---

## 🔧 Scripts del Proyecto
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

## 📌 Requisitos

* Node.js 18+
* Playwright 1.56+
* TypeScript
* Cucumber.js 12+

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

---

## 📧 Contacto

Para preguntas o soporte, contacta al equipo de QA Automation.