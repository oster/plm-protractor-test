var fs=require('fs');
var path=require('path');

var screenshotsDir = path.resolve(__dirname + '/screenshots/');
if (!fs.existsSync(screenshotsDir)) {
   fs.mkdirSync(screenshotsDir);
}



var PLMHomePage = function() {
  this.get = function() {
    browser.get('http://plm.telecomnancy.univ-lorraine.fr');
  };

  this.getTitle = function() {
    return browser.getTitle();
  };
};


describe('WebPLM homepage', function() {
  it('should have a title', function() {
    plmHomePage = new PLMHomePage();
    plmHomePage.get();
    
    expect(browser.getTitle()).toEqual('WebPLM');

    // close tracking modal
    element(by.id('trackUserModal')).all(by.tagName('button')).get(0).click()


    var lessons = element.all(by.repeater('lesson in home.lessons'))
    expect(lessons).toEqual(14);
  
    var welcome = lessons.get(0);
    welcome.click();

    browser.takeScreenshot().then(function(png) {
      console.log('saving screenshot...');
      var file = path.resolve(screenshotsDir + '/' + 'screen000' + '.png');
      fs.writeFileSync(file, png, {encoding: 'base64'}, console.log);
    }, console.log);
  });
});