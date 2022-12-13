import {BasePage} from './basePage';
import {By} from 'selenium-webdriver';

export class Blaze extends BasePage {
    //need selectors

    constructor() {
        super({url: "https://www.demoblaze.com/index.html"});
    };
    //methods - repeatable functionality
}