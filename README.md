# Angular Unit 1
**Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?**

Angular is a good option if you want to use a framework that uses the view to derive behavior. Through the use of custom HTML tags and other components you can change how you application will behave.

**People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?**

Angular is aimed at corporate IT departments rather than front-enders, many of whom are turned off by its peculiar coding style, its emulation of an HTML templating system that belongs on the server instead of in the browser, and its serious and fundamental performance issues.

**Is Angular an MVC framework?**

I think it's an MCW framework. That stands for Model View Whatever, rather than Model View Controller.

**Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!**

Most of the time, you do not need to use jQuery. For beginners, it is advised to leave out jQuery completely as there would be tendency to use jQuery when there is an easy Angular way. There has been many examples of this (mostly showing and hiding elements through jQuery when there is ngShow and ngHide directives).

If you load jQuery before angular, then Angular will use jQuery. jQLite is enough for angular to work. This is to remove any dependencies.

When you start to write directives, then you might need to add jQuery.

**Read the docs for ng-app. What is it and what does it do?**

Use this directive to auto-bootstrap an AngularJS application. The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags.

Only one AngularJS application can be auto-bootstrapped per HTML document. The first ngApp found in the document will be used to define the root element to auto-bootstrap as an application. To run multiple applications in an HTML document you must manually bootstrap them using angular.bootstrap instead.

**What does ng stand for?**

ng stands for Angular.

--------------------------------------
**What does ng-model do?**

The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

ngModel is responsible for:

• Binding the view into the model, which other directives such as input, textarea or select require.

• Providing validation behavior (i.e. required, number, email, url).

• Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).

• Setting related css classes on the element (ng-valid, ng-invalid, ng-dirty, ng-pristine, ng-touched, ng-untouched) including animations.

• Registering the control with its parent form.

**What is "dirty checking"?**

AngularJS implements dirty checking for two way data binding on $scope variables. Unlike dynamically setting up setters and getters, which is how Ember.js does two way data binding, dirty checking allows Angular to watch for variables that may or may not exist.

**Find a way to set the initial value of "name" as "BoJack" (without writing a controller).**

**What are those {{ }} expressions? Are they Handlebars?**

I think the double curly brackets mean whatever is between them is read only.

**Explain what 2-way data binding is.**

The data model and view are linked so that when a change is made to one, it is also made to the other.

-----------------------------
**What are Angular expressions? How do they compare to EJS/ERB tags?**

JavaScript-like code snippets that are usually placed in bindings such as {{ expression }}

EJS tags combine data and a template to produce HTML. Like ERB, JavaScript between <% %> is executed. JavaScript between <%= %> adds HTML to the result.

**What happens when you write invalid code in an expression? What type of error do you get?**

I've seen three different results from errors. It sometimes prints the actual text if the whole expression is completely invalid. If part of the expression is invalid it might just be blank. If it can't access the right data from ng-model you might get a message like NaN.

**What are Angular filters? Name 4 built-in filters, including one that we haven't used yet.**

Filters are used to transform data. They can be added to expressions and directives using a pipe character.

currency, number, lowercase, uppercase, json


**We'll soon see how to create custom filters. What is a use case for a custom filter?**

You need custom filters to produce a specific type of output. Whether you just want a different type of formatting or completely unique output, you can use custom filters to transform the data in the way that you want.
