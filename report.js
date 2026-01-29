const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-results/reports',
    reportPath: './test-results/site',
    openReportInBrowser: false,
    pageTitle: "Automation Report",
    reportName: "Automated Execution",
    pageFooter: "<div style='text-align:center'>Report generated on: " + new Date().toLocaleString() + "</div>",
    displayDuration: true,
    metadata: {
        browser: { name: "chromium", version: "latest" },
        device: "CI - GitHub Actions",
        platform: { name: "Windows", version: "10" }
    },
    customData: {
        title: "Execution Information",
        data: [
            { label: "Date", value: new Date().toLocaleString() },
            { label: "Executor", value: "GitHub Actions" }
        ]
    }
});
