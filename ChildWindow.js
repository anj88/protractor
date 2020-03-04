

describe('Protractor Demo App', function() {
  it('should have a title', function() {
	 //browser.waitForAngular(false);
	browser.waitForAngularEnabled(false);
	browser.get('https://skpatro.github.io/demo/links/').then();
	 expect(browser.getTitle()).toEqual('Browser Windows');
	console.log("abdjsjfhdkfjkdjf");
	element(by.css("input[name='NewTab']")).click().then(function()
	{

      browser.getAllWindowHandles().then(function(handles){

		console.log("inside ");
		browser.switchTo().window(handles[1]);
		browser.getTitle().then(function(title){
			console.log(title);
		})

      })  
    });
    
 


    
  

  });
});