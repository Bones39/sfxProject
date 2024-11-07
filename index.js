/* // -------- SF -------

// modifier la premiere colonne de la premiere ligne (mettre 5):
// il suffit de concatener le nom des classes dans querySelector
document.querySelector(".f-grid-cell.f-grid-td.f-grid-cell-weekDay1.timecard-notes-cell-ff.f-unselectable").children[0].innerHTML = "5,00"

// pour changer le titre d'un assignement:
document.querySelector("#combo-1140-inputEl").value = "test"

// pour convertir une collection en array:
Array.from(collecction)


// -------- SX -------

// pour changer une valeur de temps:
document.querySelector('[name="plt_02/10/2024_0"]').children[2].selected = true

// 1 pour mettre une valeur dans "choisir une affaire"
document.querySelector('#comboprj_1').value = "test"
document.querySelector('#comboprj_1').value = "ESKER SA INT_OP-ATG-24-0001-ATG Dispositif ESKER 2024"
document.querySelector('#comboprj_1').className = 'x-form-text x-form-field tisCombo'

// 2 pour mettre une valeur dans "choisir une tache" sur la 2nd ligne
document.querySelector('#combolev_1').value = "test3"
document.querySelector('#combolev_1').value = "Dispositif Esker ATG 2024 Ingénieur Etudes et Développement Consultant technique Confirmé"
// set le input cachée
document.querySelector('#lev_1').value = "276701"
// pour afficher le combo
document.querySelector('#ext-gen209').className = 'x-form-field-wrap' // ald 'x-form-field-wrap  x-hide-offsets'
// 3 afficher la ligne 3 "sous tache"
document.querySelector('#ext-gen222').className = 'x-form-field-wrap' // ald 'x-form-field-wrap  x-hide-offsets'
// 4 mettre une valeur dans les temps
document.querySelector('[name="plt_02/10/2024_1"]').children[2].selected = true

// la liste des valeur pour "choisir une affaire"
document.querySelector('.x-combo-list-inner')

// passer par edge et utiliser le presse papier (ça evite de passer par la console) */

const puppeteer = require('puppeteer-extra');
const stealthPluggin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer');
require('dotenv').config()

// puppeteer.use(stealthPluggin());

async function navigateSx() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath()
    });
    
    
    try {
        const page = await browser.newPage();
        await page.goto('https://erp.alteca.fr/sx/xLogin');
        // page.waitForSelector('form');
        // page.type('input[name="login"]', 'aandriamiseza');
        try {
            await page.type('#login', process.env.LOGIN);
            await page.type('input[name="password"]', process.env.PASSWORD);
            await page.click('button[type="submit"]');
            // wait for the page to be loaded
            await page.waitForSelector('#NXLeftMenuscrollCt-outerCt');
            // mettre active sur la classe du div
            // x-component sx-module x-component-default sx-module-color26A69A sx-module-color26A69A-active
            // await page.click('.sx-module-inner');  fonctionne mais prend le premier item
            await page.click('#ext-comp-1031 > div.sx-module-inner');  //fonctionne !!!
            await page.click('#ext-gen1789 > div.x-grid-cell-inner');  //fonctionne?
            //
            /* const tempsIcon = await page.evaluate(() => {document.querySelector('.sx-module-color26A69A').children[0]}); // presque
            tempsIcon.$eval("sx-module-inner", el => el.OnClick()); */
            // await page.click('.x-component sx-module x-component-default sx-module-color26A69A'); ne fonctionne pas
            // il faut changer la classe de l'élément et mettre active dedans: class="x-component sx-module x-component-default sx-module-color26A69A sx-module-color26A69A-active"
        } catch (error) {
            console.log(error);
        }
        // submit the form
    
        // Promise.all([page.waitForNavigation(), page.waitForSelector('#NXLeftMenu'), page.waitForSelector('#NXTopMenu')]);

    } catch (error) {
        console.log(error);
    }
}

navigateSx();