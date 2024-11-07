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
        await targetPage.goto('https://erp.alteca.fr/sx/x?aif_comp=com.apsylis.asa.utl.home.NXFrame&&app-id=app-1731014312213');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ext-comp-1031 i.ic')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8.671875,
                y: 6.40625,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
