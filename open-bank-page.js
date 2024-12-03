const puppeteer = require('puppeteer');


const poalim = async (userCode, password) => {
    const browser = await puppeteer.launch({
        headless: false, // הופך את המצב ל-Headful
    });

    const pages = await browser.pages();
    const page = pages[0]; // שימוש בטאב הראשון
    await page.goto("https://login.bankhapoalim.co.il/ng-portals/auth/he/");

    //מוודא שהאינפוטים כבר קיימים
    await page.waitForSelector('#userCode', { visible: true });
    await page.waitForSelector('#password', { visible: true });
    await page.waitForSelector('button[type="submit"]', { visible: true });

    // הזנת מידע לתוך האינפוטים
    await page.type('#userCode', userCode); // הזנת טקסט לאינפוט הראשון (לפי מזהה id)
    await page.type('#password', password); // הזנת טקסט לאינפוט השני (לפי מזהה id)

    // לחיצה על כפתור מסוג submit עם הטקסט "כניסה"
    await page.evaluate(() => {
        const button = Array.from(document.querySelectorAll('button[type="submit"]'))
            .find(el => el.innerText === 'כניסה');
        if (button) button.click();
    });
};

const poalimIski = async (userCode, password) => {
    const browser = await puppeteer.launch({
        headless: false, // הופך את המצב ל-Headful
    });

    const pages = await browser.pages();
    const page = pages[0]; // שימוש בטאב הראשון
    await page.goto("https://biz2.bankhapoalim.co.il/ng-portals/auth/he/biz-login/authenticate");

    //מוודא שהאינפוטים כבר קיימים
    await page.waitForSelector('#user-code', { visible: true });
    await page.waitForSelector('#password', { visible: true });
    await page.waitForSelector('button[type="submit"]', { visible: true });

    // הזנת מידע לתוך האינפוטים
    await page.type('#user-code', userCode); // הזנת טקסט לאינפוט הראשון (לפי מזהה id)
    await page.type('#password', password); // הזנת טקסט לאינפוט השני (לפי מזהה id)

    // לחיצה על כפתור מסוג submit עם הטקסט "כניסה"
    await page.evaluate(() => {
        const button = Array.from(document.querySelectorAll('button[type="submit"]'))
            .find(el => el.innerText === 'כניסה');
        if (button) button.click();
    });
};
const mercantile = async (userCode, password, zheut) => {
    const browser = await puppeteer.launch({
        headless: false, // הופך את המצב ל-Headful
    });

    const pages = await browser.pages();
    const page = pages[0]; // שימוש בטאב הראשון
    await page.goto("https://start.telebank.co.il/login/#/LOGIN_PAGE");


    //מוודא שהאינפוטים כבר קיימים
    await page.waitForSelector('#tzId', { visible: true });//מספר זהות
    await page.waitForSelector('#aidnum', { visible: true });
    await page.waitForSelector('#tzPassword', { visible: true });
    await page.waitForSelector('button[type="submit"]', { visible: true });

    // הזנת מידע לתוך האינפוטים
    await page.type('#tzId', zheut); // הזנת טקסט לאינפוט הראשון (לפי מזהה id)
    await page.type('#aidnum', userCode); // הזנת טקסט לאינפוט הראשון (לפי מזהה id)
    await page.type('#tzPassword', password); // הזנת טקסט לאינפוט השני (לפי מזהה id)

    // לחיצה על כפתור מסוג submit עם הטקסט "כניסה"
    await page.evaluate(() => {
        const button = Array.from(document.querySelectorAll('button[type="submit"]'))
            .find(el => el.innerText === 'כניסה');
        if (button) button.click();
    });
};
const mercantileIski = async (userCode, password, zheut) => {
    const browser = await puppeteer.launch({
        headless: false, // הופך את המצב ל-Headful
    });

    const pages = await browser.pages();
    const page = pages[0]; // שימוש בטאב הראשון
    await page.goto("https://start.telebank.co.il/login/#/LOGIN_PAGE_SME");

    //מוודא שהאינפוטים כבר קיימים
    await page.waitForSelector('#tzId', { visible: true });//מספר זהות
    await page.waitForSelector('#tzPassword', { visible: true });
    await page.waitForSelector('button[type="submit"]', { visible: true });

    // הזנת מידע לתוך האינפוטים
    await page.type('#tzId', zheut); // הזנת טקסט לאינפוט הראשון (לפי מזהה id)
    await page.type('#tzPassword', password); // הזנת טקסט לאינפוט השני (לפי מזהה id)

    // לחיצה על כפתור מסוג submit עם הטקסט "כניסה"
    await page.evaluate(() => {
        const button = Array.from(document.querySelectorAll('button[type="submit"]'))
            .find(el => el.innerText === 'כניסה');
        if (button) button.click();
    });
};
const pagi = async (userCode, password) => {
    const browser = await puppeteer.launch({
        headless: false, // הופך את המצב ל-Headful
    });

    const pages = await browser.pages();
    const page = pages[0]; // שימוש בטאב הראשון
    await page.goto("https://www.pagi.co.il/private/");


    //לחיצה על כניסה לחשבון פותח את הטופס להזנת פרטים
    await page.waitForSelector('a.login-trigger'); // המתנה שהאלמנט ייטען
    await page.click('a.login-trigger'); // לחיצה על האלמנט

    
    // המתנה לטעינת ה-iframe
    await page.waitForSelector('#loginFrame'); // מזהה ה-iframe
    const iframeElement = await page.$('#loginFrame'); // בוחר את ה-iframe
    const iframe = await iframeElement.contentFrame(); // מקבל את ה-context של ה-iframe

    // המתנה לטעינת האינפוטים בתוך ה-iframe
    await iframe.waitForSelector('#username', { visible: true });
    await iframe.waitForSelector('#password', { visible: true });
    await iframe.waitForSelector('#continueBtn', { visible: true });

    // הזנת מידע לתוך האינפוטים
    await iframe.type('#username', userCode); // הזנת טקסט לאינפוט הראשון
    await iframe.type('#password', password); // הזנת טקסט לאינפוט השני

    // לחיצה על כפתור "המשך"
    await iframe.click('#continueBtn');


};

const mizrahi = async (userCode, password) => {
    const browser = await puppeteer.launch({
        headless: false, // הופך את המצב ל-Headful
    });

    const pages = await browser.pages();
    const page = pages[0]; // שימוש בטאב הראשון
    await page.goto("https://www.mizrahi-tefahot.co.il/");

    //לחיצה על כניסה לחשבון פותח את הטופס להזנת פרטים
    await page.waitForSelector('#logInBtn'); // המתנה שהאלמנט ייטען
    await page.click('#logInBtn'); // לחיצה על האלמנט
    // await page.waitForSelector('#login'); // מוודא שהמודאל נטען לאחר הלחיצה


    // המתנה לטעינת ה-iframe עם id=iframeLogIn
    await page.waitForSelector('#iframeLogIn', { visible: true });

    // גישה ל-iframe
    const iframeElement = await page.$('#iframeLogIn'); // בוחר את ה-iframe
    const iframe = await iframeElement.contentFrame(); // גישה לתוכן ה-iframe

    // המתנה לטעינת האלמנטים בתוך ה-iframe
    await iframe.waitForSelector('#input_user', { visible: true });
    await iframe.waitForSelector('#input_pass', { visible: true });

    // הזנת מידע לתוך האינפוטים
    await iframe.type('#input_user', userCode); // הזנת טקסט לאינפוט הראשון
    await iframe.type('#input_pass', password); // הזנת טקסט לאינפוט השני

    // לחיצה על כפתור עם הטקסט "כניסה לחשבון"
    await iframe.evaluate(() => {
        const button = Array.from(document.querySelectorAll('button[type="button"]'))
            .find(el => ("" + el.innerText).includes('כניסה לחשבון'));
        if (button) button.click();
    });


};


module.exports = {
    poalim,
    poalimIski,
    mercantile,
    mercantileIski,
    pagi,
    mizrahi
};