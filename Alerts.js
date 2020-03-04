//import { browser } from "protractor";

//import { element, browser, By, by } from "protractor";

describe('Protractor Demo App', function() {
  it('should have a title', function() {
	browser.waitForAngularEnabled(false);  
	browser.get('https://rahulshettyacademy.com/AutomationPractice/').then();
	
	element(by.id("alertbtn")).click();
	
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(5000);
		});

	});
    
    
  });




