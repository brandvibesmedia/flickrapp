import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class FlickrappPage {
=======
export class DwDmPage {
>>>>>>> 6e663d2bcba59061422c9424ad3021f481442b53
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
