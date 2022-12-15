import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
import {Blaze} from './blazePage';
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
const blaze = new Blaze();

describe('Lizzie Solo Capstone Blaze Store Project', () => {
    beforeEach(async () => {
        await blaze.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });

    test('Can sign up for a new account', async () => {
        await blaze.click(blaze.signUpBtn);
        await blaze.setInput(blaze.signUpUserInput, '1');
        await blaze.setInput(blaze.signUpPassInput, '1');
        await blaze.click(blaze.signUpBtn1);
    });
    test('Can login and logout', async () => {
        await blaze.login();
        await blaze.click(blaze.logoutBtn);
    });
    test('Cart functionality while logged in', async () => {
        await blaze.login();
        await blaze.click(blaze.samsungPhone);
        await blaze.click(blaze.addToCart);
        await blaze.click(blaze.addToCart);
        await blaze.click(blaze.cartBtn);
        await blaze.click(blaze.deleteBtn);
        await blaze.click(blaze.deleteBtn);
    });
    test('Cart functionality while not logged in', async () => {
        await blaze.click(blaze.samsungPhone);
        await blaze.click(blaze.addToCart);
        await blaze.click(blaze.addToCart);
        await blaze.click(blaze.cartBtn);
        await blaze.click(blaze.deleteBtn);
        await blaze.click(blaze.deleteBtn);
    });
    test('Can checkout while logged in', async () => {
        await blaze.login();
        await blaze.click(blaze.samsungPhone);
        await blaze.click(blaze.addToCart);
        await blaze.click(blaze.cartBtn);
        await blaze.click(blaze.placeOrderBtn);
        await blaze.setInput(blaze.orderNameInput, 'Test Name');
        await blaze.setInput(blaze.orderCountryInput, 'USA');
        await blaze.setInput(blaze.orderCityInput, 'Washington');
        await blaze.setInput(blaze.orderCreditCartInput, '1234 1234 1234 1234');
        await blaze.setInput(blaze.orderMonthInput, '1');
        await blaze.setInput(blaze.orderYearInput, '24');
        await blaze.click(blaze.purchaseBtn);
        await blaze.click(blaze.okBtn);
    });
    test('Can checkout while not logged in', async () => {
        await blaze.click(blaze.samsungPhone);
        await blaze.click(blaze.addToCart);
        await blaze.click(blaze.cartBtn);
        await blaze.click(blaze.placeOrderBtn);
        await blaze.setInput(blaze.orderNameInput, 'Test Name');
        await blaze.setInput(blaze.orderCountryInput, 'USA');
        await blaze.setInput(blaze.orderCityInput, 'Washington');
        await blaze.setInput(blaze.orderCreditCartInput, '1234 1234 1234 1234');
        await blaze.setInput(blaze.orderMonthInput, '1');
        await blaze.setInput(blaze.orderYearInput, '24');
        await blaze.click(blaze.purchaseBtn);
        await blaze.click(blaze.okBtn);
    });
    test('Can navigate categories, use previous/next, and home button', async () => {
        await blaze.click(blaze.phonesBtn);
        await blaze.click(blaze.nextBtn);
        await blaze.click(blaze.previousBtn);
        await blaze.click(blaze.laptopsBtn);
        await blaze.click(blaze.nextBtn);
        await blaze.click(blaze.previousBtn);
        await blaze.click(blaze.monitorsBtn);
        await blaze.click(blaze.nextBtn);
        await blaze.click(blaze.previousBtn);
        await blaze.click(blaze.categoriesBtn);
        await blaze.click(blaze.nextBtn);
        await blaze.click(blaze.previousBtn);
        await blaze.click(blaze.homeBtn);
    });
});