
 
describe('New Test',function(){
	var obj=  require("./Objects.js");
	beforeEach(function(){
			obj.getURL();
		})
	it('Fill Form',function(){
		

		browser.waitForAngularEnabled(false);
		
		
		obj.name.sendKeys("Anjali Nair");
		element(by.name("email")).sendKeys("nair.anjali.88@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("abc");
		element(by.id("exampleCheck1")).click();
		//element(by.cssContainingText("[id='exampleFormControlSelect1']option","Female")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.css("div[class='form-group'")).first().click();
		//element.all(by.name("inlineRadioOptions")).first().click();
		element(by.name("bday")).sendKeys("19880513");
		element(by.buttonText("Submit")).click().then(function(text){
			browser.sleep(5000);
			console.log(text);
			//expect(element(by.css("div[class*='success']")).getText()).toBe("Success! The Form has been submitted successfully!");
			
		})
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("A").then(function(){
			element(by.css("div[class='alert alert-danger']")).getText().then(function(texts){
				browser.sleep(5000);
				console.log(texts);
				})

		})

		element(by.linkText("Shop")).click();
		//take all carts in a list
		//traverse through list ,get title ,if title is desired then we need to click on add button
		function selectitems(product){
		element.all(by.tagName("app-card")).each(function(item){

			item.element(by.css("h4 a")).getText().then(function(text){

				if(text==product){

					//click on add button
					item.element(By.css("button[class*='btn-info']")).click();

				}
			})
		})

	}
		selectitems("Samsung Note 8");
		selectitems("iphone X");
		


		
		element(by.partialLinkText("Checkout")).getText().then(function(text){

			console.log(text);
			var x =text.split("(");
			console.log(x[1].trim().charAt(0));
			
		})
		element(by.css("a[class='nav-link btn btn-primary']")).click();
		function elementscheck()
		{
			var total=0;
		//click on checkout
		
		//scan over the items and find out the cost of each item and place in in an array
		//var products=new Array();
		//element.all(by.css("table[class='table table-hover'] tbody tr ")).each(function(item){
			
			element.all(by.css("td:nth-of-type(4) strong")).each(function(a){

					
					a.getText().then(function(text){

					var amount=text.split("₹. ");
					
					total=total+Number(amount[1]);
					
					



				})
			})		

			element(by.css("td[class='text-right'] h3 strong")).getText().then(function(item){
						console.log("Total is "+total);
						var item1=item.split("₹. ");
						var amount=Number(item1[1]);
						console.log("Amount in the cardt is "+amount);
						expect(amount==total);
					})			

			

				
				
			
		}
			elementscheck();
			element.all(by.buttonText("Remove")).first().click();

			
			elementscheck();
		
		

		


		
		



	})

	afterEach(function(){
		console.log("Test ended");
	})
})