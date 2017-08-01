import { CityUsherPage } from './app.po';

describe('city-usher App', () => {
  let page: CityUsherPage;

  beforeEach(() => {
    page = new CityUsherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
