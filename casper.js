/**
	Require the casper framework
*/
var casper = require('casper').create({
	verbose: true
}),
	url = 'http://tdd.local/';

/**
	Start an instance of the browser and go to the page
	we want to test 
*/
casper.start(url, function() {
	/**
		Let's just check that we're getting somewhere...
	*/
	this.echo('This is my first test script');

	/** 
		First we'll test that we're getting the correct url
	*/ 
	this.test.assert(this.getCurrentUrl() === url, 'url is the one expected');
});

/**
	Then we'll test to see if our toggle element and widget element exist
*/
casper.then(function () {
	this.echo('Were now in here');

	this.test.assertExists('a.theToggle', 'toggle element exists');
	this.test.assertExists('#widget', 'widget element exists');
});

/**
	Then we'll click the on the toggle and test if the widget has 
	a class added to it
*/
casper.then(function (){
	this.click('a.theToggle');
	this.test.assertEval(function () {
		return document.querySelector('#widget').className === 'active';
	}, 'Widget has active class');

	this.click('a.theToggle');
	this.test.assertEval(function () {
		return document.querySelector('#widget').className == '';
	}, 'Widget does not have class');
});

casper.run(function () {
	/**
		This gives you a nice summary at the end
	*/
	this.test.renderResults(true);
});
