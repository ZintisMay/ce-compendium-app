import { CeCompendiumAppPage } from './app.po';

describe('ce-compendium-app App', () => {
  let page: CeCompendiumAppPage;

  beforeEach(() => {
    page = new CeCompendiumAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
