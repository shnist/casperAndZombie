var Browser = require('zombie'),	
	assert = require('assert'),
	url = 'http://tdd.local/';

describe('Page loads and expected elements exist', function () {
  	before(function(done) {
	    this.browser = new Browser();
	    this.browser
      	.visit(url)
      	.then(done, done);
 	});


	it('loads tdd.local', function () {
		assert.equal(this.browser.url, url);
	});

	it('Contains the widget', function () {
		assert.ok(this.browser.query("#widget"));
	});

	it('Contains the toggle element', function () {
		assert.ok(this.browser.query(".theToggle"));
	});

});

describe('Expected widget behaviour', function () {

	it('should have an active class after toggle click', function (){
		this.browser.clickLink('theToggle', function (e, browser, status) {
			assert.equal(this.browser.query('#widget').className, 'active');
		});
	});
})