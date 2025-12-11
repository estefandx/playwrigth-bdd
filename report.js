const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-results/reports',
    reportPath: './test-results/site',
    openReportInBrowser: false,
    pageTitle: "Reporte de Automatización",
    reportName: "Ejecución Automatizada",
    pageFooter: "<div style='text-align:center'>Reporte generado el: " + new Date().toLocaleString() + "</div>",
    displayDuration: true,
    metadata: {
        browser: { name: "chromium", version: "latest" },
        device: "CI - GitHub Actions",
        platform: { name: "Windows", version: "10" }
    },
    customData: {
        title: "Información de ejecución",
        data: [
            { label: "Fecha", value: new Date().toLocaleString() },
            { label: "Ejecutor", value: "GitHub Actions" }
        ]
    }
});
