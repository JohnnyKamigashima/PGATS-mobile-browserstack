export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    specs: [
        './test/specs/**.e2e.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    services: [
        [
            'browserstack',
            {
                app: process.env.BROWSERSTACK_APP,
                buildIdentifier: "${BUILD_NUMBER}",
                browserstackLocal: true
            }, {
                testObservability: true,
                testObservabilityOptions: {
                    projectName: "Entrega projeto de CI com wdio",
                    buildName: "0.0.1", // Adicione esta linha
                    buildIdentifier: "#${BUILD_NUMBER}" // Opcional, mas recomendado
                }
            }
        ]
    ],
    capabilities: [{
        'bstack:options': {
            deviceName: 'Samsung Galaxy S22 Ultra',
            platformVersion: '12.0',
            platformName: 'android',
        }
    }],
    commonCapabilities: {
        'bstack:options': {
            projectName: "BrowserStack Samples",
            buildName: 'browserstack build',
            sessionName: 'BStack parallel webdriverio-appium',
            debug: true,
            networkLogs: true
        }
    },
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'report/android/bs/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.saveScreenshot(`./report/android/bs/${test.title}${new Date().getTime()}.png`)
    },
}
