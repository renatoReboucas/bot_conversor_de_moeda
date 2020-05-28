const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')

console.log('Bem vindo ao Bot conversor 🤖💰');


async function robo() {
  try{
    const browser = await puppeteer.launch({ headless: false, ignoreHTTPSErrors: true });
    const page = await browser.newPage();
    // const waitForNavigation = page.waitForNavigation();
    const moedaBase = readlineSync.question( 'Infome uma moeda base: ') ||'dolar'
    const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') ||'real'
    const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C5CHFA_enBR831BR831&oq=dolar+para+real&aqs=chrome..69i57.2728j0j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(url);
    // await page.screenshot({ path: 'example.png' });

    //roda codigo js
    const resultado = await page.evaluate(() => {
      return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });


    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} e: ${resultado}`);
    
    await browser.close();
  }catch(error){
    console.log("DEU RUIM", error); 
  }
}

robo();