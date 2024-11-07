const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1920,
            height: 911
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://erp.alteca.fr/sx/x?aif_comp=com.apsylis.asa.utl.home.NXFrame&&app-id=app-1730193761764');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ext-comp-1031 > div.sx-module-inner')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 32,
              },
            });
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('#ext-gen443 > td:nth-of-type(2) select')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48.484375,
                y: 7.5,
              },
            });
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('#ext-gen443 > td:nth-of-type(2) select')
        ])
            .setTimeout(timeout)
            .fill('7.2');
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('#ext-gen122 div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7,
                y: 11,
              },
            });
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('div.x-combo-selected'),
            frame.locator('::-p-text(ESKER SA INT_OP-ATG-24-0001-ATG)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 266,
                y: 12,
              },
            });
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('#ext-gen447 > td:nth-of-type(2) select')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.484375,
                y: 5.5,
              },
            });
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('#ext-gen447 > td:nth-of-type(2) select')
        ])
            .setTimeout(timeout)
            .fill('0.8');
    }
    {
        const targetPage = page;
        let frame = targetPage.mainFrame();
        frame = frame.childFrames()[1];
        await puppeteer.Locator.race([
            frame.locator('#ext-gen250'),
            frame.locator('::-p-text(Mettre à jour)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.515625,
                y: 12.9375,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
