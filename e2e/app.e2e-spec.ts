import { FlickrappPage } from './app.po';

describe('flickrapp App', function() {
  let page: FlickrappPage;

  beforeEach(() => {
    page = new FlickrappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
