<<<<<<< HEAD
import { FlickrappPage } from './app.po';

describe('flickrapp App', function() {
  let page: FlickrappPage;

  beforeEach(() => {
    page = new FlickrappPage();
=======
import { DwDmPage } from './app.po';

describe('dw-dm App', function() {
  let page: DwDmPage;

  beforeEach(() => {
    page = new DwDmPage();
>>>>>>> 6e663d2bcba59061422c9424ad3021f481442b53
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
