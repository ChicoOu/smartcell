import { SmartcellPage } from './app.po';

describe('smartcell App', () => {
  let page: SmartcellPage;

  beforeEach(() => {
    page = new SmartcellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
