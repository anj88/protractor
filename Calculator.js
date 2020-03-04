

describe('Insert selenium javascript library\'s tagline', function () {
	var seleniumJsFlavours = require('./datadummy.js');
	var using = require('jasmine-data-provider');
    beforeEach(function () {
        browser.get('http://angularjs.org');
    })
    using(seleniumJsFlavours.webdriverjsInfo, function (data, description) {
        it("Insert description of " + description, function () {
            element(by.model('todoList.todoText')).sendKeys(data.tagline);
            // Clicks on 'Add' button
            element(by.css('[value="add"]')).click();
            // Getting all Todo lists displayed
            var todoList = element.all(by.repeater('todo in todoList.todos'));
            // Asserting the TODO's count as 3
            expect(todoList.count()).toEqual(3);
            //Verifying newly entered TODO is added
            expect(todoList.get(2).getText()).toEqual(data.tagline);
        });
	});
	
})
