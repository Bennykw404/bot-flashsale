const puppeteer = require('puppeteer-core');

// const targetUrl = 'https://shopee.co.id/Apple-iPhone-11-Pro-512GB-Midnight-Green-i.255563049.6435648695'

(async () => {
    const browserURL = 'http://127.0.0.1:9222';
    const browser = await puppeteer.connect({
        defaultViewport: null,
        browserURL
    });

    const page = (await browser.pages())[0];

    let interval = setInterval(async () => {
        await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
        const button = await page.$("#main > div > div._1Bj1VS > div.page-product.page-product--mall > div.container > div.product-briefing.flex.card._2cRTS4 > div.flex.flex-auto.k-mj2F > div > div:nth-child(5) > div > div > button.btn.btn-tinted.btn--l.YtgjXY._3a6p6c");
        console.log('button', button)
        if(button) {
            await button.click();
        }
    }, 5000);

})();