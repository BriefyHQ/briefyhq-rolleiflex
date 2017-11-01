import { BriefyhqCityPackagesPage } from './app.po';

describe('briefyhq-city-packages App', () => {
  let page: BriefyhqCityPackagesPage;

  beforeEach(() => {
    page = new BriefyhqCityPackagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
