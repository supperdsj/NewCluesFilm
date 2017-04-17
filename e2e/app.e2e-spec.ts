import { NewCluesFilmPage } from './app.po';

describe('new-clues-film App', () => {
  let page: NewCluesFilmPage;

  beforeEach(() => {
    page = new NewCluesFilmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
