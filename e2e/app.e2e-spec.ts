import { UmslhackSitePage } from './app.po';

describe('umslhack-site App', () => {
  let page: UmslhackSitePage;

  beforeEach(() => {
    page = new UmslhackSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
