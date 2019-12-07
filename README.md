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

* create-react-app for qui
* Jest and Enzyme for testing

### Tradoffs

* Used the Fetch API for making HTTP requests as it was easy to get up and running since was no need to install a third-party dependency
* Opted for a Flip Card Layout which allows the user to quickly view repo commits, but this layout proved to be a bit limiting due to the size of the cards. If any more information would be needed to be displayed in the future, I would consider using a different layout

### Future/Unfinished Work

* Add pagination and/or lazy load repos to minimize initial load time and create a cleaner UX
* Add PropType validation to components
* Considering using Axios or another HTTP library with better error handling and backwards compatibility
* Separate out API calls to a separate file
* Consider using SASS or another CSS preprocessor
* Manually test UI across different devices and browsers
* Run an accessibility audit to ensure accessibility across users and devices
