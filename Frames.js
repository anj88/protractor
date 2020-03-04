//import { browser, element, by } from "protractor";
//import { element, browser, By, by } from "protractor" ;

describe('Protractor Demo App', function() {
  it('should have a title', function() {
	browser.waitForAngularEnabled(false);  
	browser.driver.manage().window().maximize();
	browser.get('https://rahulshettyacademy.com/AutomationPractice/').then();
	
	browser.switchTo().frame("courses-iframe");
	element(by.css("a[class='theme-btn']")).getText().then(function(text){
	console.log(text);

	});
	



	
	
	
	
	
	
	
	
	});
    
    
  });

