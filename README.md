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
**What is "dirty checking"?**
**Find a way to set the initial value of "name" as "BoJack" (without writing a controller).**
**What are those {{ }} expressions? Are they Handlebars?**
**Explain what 2-way data binding is.**
