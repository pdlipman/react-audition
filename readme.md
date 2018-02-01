# Intro
Congratulations friend! You've moved on to the next round. To get a better feel for your knowledge of React.js & Functional Reactive Programming (FRP), we've got a quick project scaffolded for you to show us what you can really do.

# Getting Started
## Running the Code
You'll need a recent version of node (8.x or better). Install `yarn` if you don't already have it (see below if you're unfamiliar with yarn). Run `yarn install && cd client && yarn install` to install dependencies locally. Launch the dev server using `yarn dev` in the root of the project to serve up the site. The site should automatically open in your browser, but if not verify that you can [view the site](http://localhost:3000) in a browser tab and you should be good to start coding.

## What's a yarn?
If you're unfamiliar with yarn, it's an alternative package management tool to npm. If you don't already have it installed, you can easily install it by following the instructions [here](https://yarnpkg.com/en/docs/install). Please use `yarn` rather than `npm` for this project.  

# Instructions
Construct a single page [React.js](https://github.com/facebook/react) app that implements the elements shown in [this interactive wireframe](https://xd.adobe.com/view/5d652301-10c1-47d9-81e9-b7040d43ed4c/). Use a unidirectional data-flow pattern such as [Flux](https://facebook.github.io/flux/), [Redux](https://github.com/reactjs/redux), etc. The app must be able to:
 - Display a list of classes
 - Display a list of students per class with the student's average grade in that class
 - Interactively sort students by either name or grade

Included in root of this repo is a Node.js server that serves an API endpoint for the students (`/api/students`) which contains a list of all students, their classes, and their test grades in that class (this data is the same as the previous assignment). The API is proxied through the React dev server, so when fetching data from client code you can simply use the relative URL. 

In `postmortem.md`, describe your code, the choices you made, and anything else you would like to communicate about the solution.

**Fork this repo, implement your solution, and email us the URL of your fork.**

# Grading Criterion
 - Uses `yarn` for dependency management, rather than `npm`
 - Compiles and runs without errors in the browser/console
   - If you add any new packages/dependencies, we must be able to run `yarn install` to restore them with no further effort
   - We must be able to run `yarn dev` to run the app
 - Displays the correct output
 - Has required interactivity
 - Roughly follows the design in the included wireframe (doesn't need to be pixel-perfect)
   - You may choose to use or not use any css libraries/frameworks
 - Follows UI best-practices
 - Implements unidirectional data-flow as mentioned above
 - Utilizes FRP
 - Shows clear and maintainable code
 - Targets ES6+ (TypeScript is acceptable)
