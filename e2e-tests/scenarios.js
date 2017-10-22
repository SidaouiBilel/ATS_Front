'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /Alldemands when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/Alldemands");
  });


  describe('Alldemands', function() {

    beforeEach(function() {
      browser.get('index.html#!/Alldemands');
    });


    it('should render Alldemands when user navigates to /Alldemands', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
