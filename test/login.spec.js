const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');


describe("Pruebas de Automatización selenium", () => {
    let driver;

    before(async () => {
        driver = new Builder().forBrowser('MicrosoftEdge').build();
    });

    after(async () => {
        await driver.sleep(5000);
        await driver.quit();
    });

    it("Prueba 1: Registro de Usuario", async function () {
        await driver.get('https://magento.softwaretestingboard.com/');
         const finalScreenshot1 = await driver.takeScreenshot();
            fs.writeFileSync('img/Pagina_inicio.png', finalScreenshot1, 'base64');
        await driver.findElement(By.className('authorization-link')).click();
        await driver.findElement(By.className('action create primary')).click();
        await driver.findElement(By.id('firstname')).sendKeys('Jose');
        await driver.findElement(By.id('lastname')).sendKeys('Cabral');
        await driver.findElement(By.id('email_address')).sendKeys('JoseCabral3222@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('Jc11223344');
        await driver.findElement(By.name('password_confirmation')).sendKeys('Jc11223344');
         const finalScreenshot2 = await driver.takeScreenshot();
            fs.writeFileSync('img/Formulario_registro.png', finalScreenshot2, 'base64');
        await driver.findElement(By.className('action submit primary')).click();
        
    });

    it("Prueba 2: Cambio de correo electronico", async function () {
        await driver.findElement(By.className('action edit')).click();
        await driver.findElement(By.id('change-email')).click();
        const emailInput = await driver.findElement(By.id('email'));
        await emailInput.clear();
        await emailInput.sendKeys('cabraljose322@gmail.com');
        await driver.findElement(By.id('current-password')).sendKeys('Jc11223344');
        const finalScreenshot3 = await driver.takeScreenshot();
            fs.writeFileSync('img/Cambio_correo.png', finalScreenshot3, 'base64');
        await driver.findElement(By.className('action save primary')).click();
    });
    it("Prueba 3: Inicio de Sesión", async function () {
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).sendKeys('cabraljose322@gmail.com');
        await driver.findElement(By.id('pass')).sendKeys('Jc11223344');
        const finalScreenshot7 = await driver.takeScreenshot();
        fs.writeFileSync('img/Inicio_sesion.png', finalScreenshot7, 'base64');
        await driver.findElement(By.id('send2')).click();
    });

    it("Prueba 4: Cambio de contraseña", async function () {
        await driver.findElement(By.className('action change-password')).click();
        await driver.findElement(By.name('current_password')).sendKeys('Jc11223344');
        await driver.findElement(By.id('password')).sendKeys('Jc112233444');
        await driver.findElement(By.id('password-confirmation')).sendKeys('Jc112233444');
         const finalScreenshot4 = await driver.takeScreenshot();
        fs.writeFileSync('img/Cambio_contraseña.png', finalScreenshot4, 'base64');
        await driver.findElement(By.className('action save primary')).click();
    });

    it("Prueba 5: Inicio y cierre de Sesión", async function () {
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).sendKeys('cabraljose32@gmail.com');
        await driver.findElement(By.id('pass')).sendKeys('Jc112233444');
        await driver.findElement(By.id('send2')).click();
        await driver.sleep(3000);
        await driver.findElement(By.className('action switch')).click();
        const finalScreenshot5 = await driver.takeScreenshot();
        fs.writeFileSync('img/Cierre_sesion.png', finalScreenshot5, 'base64');
        await driver.findElement(By.className('authorization-link')).click();
        const finalScreenshot6 = await driver.takeScreenshot();
        fs.writeFileSync('img/Sesion_cerrada.png', finalScreenshot6, 'base64');
    });
});
