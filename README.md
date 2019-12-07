# Github Stars
#### A SPA Listing the Most Starred Repos on Github

## Setup

This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

After cloning the repo and navigating to the project's directory:

* `npm install`  to install dependencies
* `npm start`  to run the app in development mode
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Before deploying to a production environment:

* `npm run build` to build the app for production to the `build` folder.
* This correctly bundles React in production mode and optimizes the build for the best performance.

Running Tests:

* `npm test` to launch the test runner in interactive watch mode

## Project Overview

### Languages/Frameworks/Packages

* React v16.12.0, Node v12.1.0 (bootstrapped with create-react-app)
* Jest, Enzyme, and enzyme-to-json for testing

### Tradoffs

* Used the Fetch API for making HTTP requests as it was easy to get up and running/no need to install a third-party dependency
* Opted for a Flip Card Layout which allows the user to quickly view repo commits
  - This layout proved to be a bit limiting due to the size of the cards and amount of commits to be displayed. If any more information would be needed to be displayed in the future, I would consider using a different layout
  - There also is some cross-browser inconsistencies regarding the css used for the flip animation which would need to be fine-tuned across browsers

### Future/Unfinished Work

* Add pagination and/or lazy load repos to minimize initial load time and create a cleaner UX
* Add PropType validation to components
* Considering using Axios or another HTTP library with better error handling and backwards compatibility
* Separate out API calls to a separate file
* Consider using SASS or another CSS preprocessor
* Manually test UI across more devices and browsers
* Run an accessibility audit to ensure accessibility across users and devices
