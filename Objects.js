

function shop()
{

	this.name=element(by.name("name"));
	this.getURL=function(){

		browser.get("https://rahulshettyacademy.com/angularpractice/").then();
		browser.driver.manage().window().maximize();
	}

	
}

module.exports=new shop();
