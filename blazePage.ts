import {BasePage} from './basePage';
import {By, until} from 'selenium-webdriver';

export class Blaze extends BasePage {
    homeBtn: By = By.xpath('(//a[@class="nav-link"])[1]');
    cartBtn: By = By.xpath('(//a[@class="nav-link"])[4]');
    loginBtn: By = By.xpath('(//a[@class="nav-link"])[5]');
    signUpBtn: By = By.xpath('(//a[@class="nav-link"])[8]');
    logoutBtn: By = By.xpath('//a[text()="Log out"]');
    categoriesBtn: By = By.xpath('//a[@id="cat"]');
    phonesBtn: By = By.xpath('//a[text()="Phones"]');
    laptopsBtn: By = By.xpath('//a[text()="Laptops"]');
    monitorsBtn: By = By.xpath('//a[text()="Monitors"]');
    previousBtn: By = By.xpath('//button[@id="prev2"]');
    nextBtn: By = By.xpath('//button[@id="next2"]');
    signUpUserInput: By = By.xpath('(//input[@class="form-control"])[3]');
    signUpPassInput: By = By.xpath('(//input[@class="form-control"])[4]');
    signUpBtn1: By = By.xpath('//button[text()="Sign up"]');
    loginUserInput: By = By.xpath('//input[@id="loginusername"]');
    loginPassInput: By = By.xpath('//input[@id="loginpassword"]');
    loginBtn1: By = By.xpath('//button[text()="Log in"]');
    samsungPhone: By = By.xpath('//a[text()="Samsung galaxy s6"]');
    addToCart: By = By.xpath('//a[@class="btn btn-success btn-lg"]');
    deleteBtn: By = By.xpath('(//a[text()="Delete"])[1]');
    placeOrderBtn: By = By.xpath('//button[text()="Place Order"]');
    orderNameInput: By = By.xpath('//input[@id="name"]');
    orderCountryInput: By = By.xpath('//input[@id="country"]');
    orderCityInput: By = By.xpath('//input[@id="city"]');
    orderCreditCartInput: By = By.xpath('//input[@id="card"]');
    orderMonthInput: By = By.xpath('//input[@id="month"]');
    orderYearInput: By = By.xpath('//input[@id="year"]');
    purchaseBtn: By = By.xpath('//button[text()="Purchase"]');
    okBtn: By = By.xpath('//button[text()="OK"]');

    constructor() {
        super({url: "https://www.demoblaze.com/index.html"});
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.homeBtn));
    };
    async login() {
        await this.driver.wait(until.elementLocated(this.loginBtn));
        await this.click(this.loginBtn);
        await this.setInput(this.loginUserInput, 'Test Name');
        await this.setInput(this.loginPassInput, 'password');
        await this.click(this.loginBtn1);
    };
};