import { NgFrontendContainerPage } from './app.po';

describe('ng-frontend-container App', function() {
  let page: NgFrontendContainerPage;

  beforeEach(() => {
    page = new NgFrontendContainerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
