const puppeteer = require('puppeteer');

(async () => {
  const bs = await puppeteer.launch({headless:true});
  const page = await bs.newPage();
  // page.on('console', msg => {
  // 	if(msg.type()=='log'){//error
  // 		console.log('PAGE LOG:', msg.text())
	//   }
  // })

  await page.goto('https://dev3.pdffiller.com/454879723--w9-2018-2019-form-', {waitUntil: 'networkidle2'});
  await page.click('.fp-form-c2a__submit-btn');
  await page.waitForXPath(`//ul[@class = 'collapsed-right-sidebar__list']//span[contains(text(), "ADD FILLABLE FIELDS")]`)
  const cookies = await page.cookies();
  console.log(cookies)
  console.log(page.url())
  await bs.close();
})();