![Quick Frontend Prototyping with AngularJS](http://i.imgur.com/YXnwUcd.jpg "Quick Frontend Prototyping with AngularJS")

# Quick Frontend Prototyping with AngularJS: Basics

If you have ever created templates from a design for a large website, you know how difficult it can be to keep some pieces (such as a global navigation) consistent across hundreds of files. [DRY!](http://en.wikipedia.org/wiki/Don't_repeat_yourself) (Don’t Repeat Yourself). Instead, we should have an environment setup to place these components for us no matter how many times we need to change them.

### Goals

* Keep "per page" content separate for better readability
* Set up an environment to reduce the need for code repetition

> Note: Within some code examples you might see an ellipsis at the top or bottom. These are signals the the code is just a fragment of an existing file. They should not be placed within your code

If you'd like to follow along with the full code, checkout the [tutorial's repository](https://github.com/simonwjackson/angular-frontend-prototyping) on github.


## Start a local server

Before we get started we will need to run our demo through a local web server. Open up your terminal and type:

```bash
  mkdir angularDemo
  cd angularDemo
  python -m SimpleHTTPServer 3000
```

Our (future) files will now be viewable at [http://localhost:3000](http://localhost:3000)

> Note: If you are uncomfortable with using the terminal. You can use one of the apps below to quickly startup a local web server:
>
> * Mac: [Simple HTTP Server](https://itunes.apple.com/us/app/simple-http-server/id441002840?mt=12)
> * Windows: [QuickShare](http://www.quicksharehq.com/)

## Boilerplate

First, lets start off with some boilerplate HTML. Angular is included just before the closing `body` tag

> Note: I have also included bootstrap so that we have some sane styling for this demo but it is not required to use with angular.

**index.html**

```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset=”utf-8″>
      <title>Angular Demo</title>
      <link href=”//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css” rel=”stylesheet”>
    </head>
    <body>
      <div class=”container”>
        <!– our content here –>
      </div>

      <!– angular –>
      <script src=”//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min.js”></script>
    </body>
  </html>
```

## Angular Setup

#### HTML

Before we get started, we need to initialize angularjs. In our `<html>` tag we will need to add the `data-ng-app` attribute. This tells angular that our app will exist within the entire html document.

Now, lets call our app `myApp` by setting the value of the `data-ng-app` attribute.

**index.html**

```html
  <html data-ng-app="myApp">
  ...
```

Finally, lets set up an area where we can easily swap out content. Angular calls these sections views, and we can enable this by setting the `data-ng-view` attribute to the tag of our choice.

**index.html**

```html
  ...
  <div class="container">
    <div data-ng-view></div>
  </div>
  ...
```

#### Javascript

Now that Angular knows where it will exist within our template, lets actually initalize it some javascript.

**js/app.js**

```javascript
  var myApp = angular.module('myApp', []);
```

Angular is now ready to go, but we need to tell it what to do when we want to go to a page. Next, lets tell angular what we want to show when we visit various areas of the website:

**js/app.js**

```javascript
  ...

  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      });
  });
```

The code above is pretty self explanitory:

When a specific route *(url)* is requested, load an HTML file to be dumped into our view `<div data-ng-view>`

Finally, lets add this script to our main `index.html` file just before the closing `body` tag:

```html
  ...
      <script src="js/app.js"></script>
    </body>
  ...
```

## Templates

We’re almost there! Now we just need to create the `welcome.html` & `about.html` files that we refrenced above. Lets just put in some dummy text for now:

**views/welcome.html**

```html
  <h1>Home Page</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <p>Laboriosam, nihil, placeat, nesciunt expedita doloremque</p>
```

**views/about.html**

```html
  <h1>About Us</h1>
  <p>Tempora repudiandae impedit corrupti.</p>
```

Finally, lets create a simple navigation menu to travel through our little website. Because we want our navigation to be global (on every page) we will place it outside of our view element `<div data-ng-view>`

**index.html**

```html
  ...
    <ul class="nav nav-tabs">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    <div data-ng-view></div>
  ...
```

**Important**: Notice that angular uses the hashtag (#) to call our routes

## That’s it!

We now have a fully functional prototype for our website. If we visit [http://localhost:3000](http://localhost:3000) and click on the navigation tabs, we can see that each unique page will change, but the global navigation will stay the same.

Check back next week for another lesson in prototyping with Angular. And as always, if you have any questions, comments or suggestions, please let us know in the comments section below.

Happy Coding!


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/simonwjackson/angular-frontend-prototyping/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

