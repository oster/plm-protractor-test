describe('WebPLM homepage', function() {
  it('should have a title', function() {
    browser.get('http://plm.telecomnancy.univ-lorraine.fr');
	expect(browser.getTitle()).toEqual('WebPLM');
  });
});