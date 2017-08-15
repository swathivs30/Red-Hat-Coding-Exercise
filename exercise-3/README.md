## Summary
This is a starter template, where I have incorporated the components of the application. Starting with the `app` component as the root, The `dashboard` consisting of a list of users is loaded along with the `navigation` bar. However , the navigation to the `userDetails` page itself is done upon clicking on the individual user and is "bookmarkable". The routing is done via the `core.router.js` in the `core` folder'.

## Requirements

- Install Node
    - I suggest using NVM since it installs both npm and node for you
    - type nvm install 5.00
    - gives you node version greater than 5.00
    - gives you npm version greater than 3.00
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
Clone this repo and run the content locally:
```bash
$ npm install
$ gulp serve-dev
```
- `npm install` will install the required node libraries under `node_modules` and then call `bower install` which will install the required client-side libraries under `bower_components`.
- `gulp serve-dev` will serve up the Angular application in a browser window. As you make changes to the code, the browser will update to reflect the changes immediately.

##### This template is taken from the opensource Github repository : https://github.com/archfirst. #######

The features include:
- A well-organized component hierarchy starting from `approot`. Components are implemented using directives (no dangling controllers).
- Follows AngularJS style guidelines (e.g. `controller as` syntax).
- Uses [AngularUI Router](https://github.com/angular-ui/ui-router) for flexible routing and nested views.
- Uses [Angular Bootstrap](http://angular-ui.github.io/bootstrap/) to remove dependencies on jQuery and Bootstrap’s JavaScript.
- The project is built using Gulp.

## Folder Structure

The folder structure is somewhat simplified and flatter compared to John Papa's [Gulp Patterns](https://github.com/johnpapa/gulp-patterns) project. The description below includes reasons for some of the customizations.

### Highest Level Structure

```
/bower_components
/build
/node_modules
/src
/test
```

- `bower_components:` Bower components downloaded by `bower install` (do not check in)

- `build:` Production build (do not check in)

- `node_modules:` Node.js modules downloaded by `npm install` (do not check in)

- `src:` contains all the client source files including HTML, styles (in SASS format), JavaScript and images

### Source Folder Structure

```
/src
    /components
    /core
    /framework
    /images
    /app.module.js
    /app.scss
    /index.html
```

The `src` folder contains only the source for the AngularJS client application. It treats all 3 web technologies (HTML, CSS and JavaScript) as first class citizens and arranges them into logical modules. At the highest level you will find the main html, css (well, scss) and js files:

- `index.html`
- `app.scss`
- `app.module.js`

Below this level you will find various folders that arrange the application's functionality into logical modules.

- `framework:` Container for reusable services such as logging, exception handling, routing, security, local storage etc. These services are expected to work out-of-the-box without any changes for most applications. The template provides sample implementations for the first three. (This folder is called `blocks` in the gulp-patterns project.)

- `core:` Contains functionality that is shared across the application and will probably need customization for a specific application. This includes directives, filters and services and styles common to the entire application.

- `components:` Contains all the components of the application.

- `images:` Images used in the application.

## useful Taks
### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

## Credits
This template is taken from the opensource Github repository : https://github.com/archfirst.
This template is heavily influenced by John Papa's [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide) and his [Gulp Patterns](https://github.com/johnpapa/gulp-patterns) project.
