import { DwDmPage } from './app.po';

describe('dw-dm App', function() {
  let page: DwDmPage;

  beforeEach(() => {
    page = new DwDmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
