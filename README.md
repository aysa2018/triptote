
# TripTote

## Project Description

The **TripTote** is a modern, interactive web application designed to make travel planning easier. By generating a packing list tailored to specific trip types and incorporating live weather data, it provides a highly personalized travel preparation experience. With options for mood-based themes, light and dark modes, and micro-interactions for an engaging user interface, this app helps users remember essential items and plan based on destination conditions.

### Problem It Solves

Many people find packing for trips stressful, often forgetting items or struggling to decide what to pack based on factors like destination, trip type, and weather. The Packing Helper App solves this problem by:
1. Generating a packing list based on the trip type (e.g., beach, city, hiking, business etc).
2. Integrating real-time weather data to suggest items based on the destination’s forecast.
3. Offering a user-friendly, visually appealing interface with mood themes to make packing a more enjoyable process.

## Setup and Run Instructions

### Prerequisites
- **Node.js** and **npm**: Ensure you have Node.js and npm installed. You can download Node.js, which includes npm, from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/aysa2018/triptote.git
   ```

2. Navigate into the project directory:
   ```bash
   cd triptote
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up an environment file for the API key:
   - Create a `.env` file in the root directory.
   - Add your API key from the [Tomorrow.io Weather API](https://developer.tomorrow.io/) by including the following line:
     ```env
     REACT_APP_TOMORROW_API_KEY=your_api_key_here
     ```

### Running the Project

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and go to:
   ```
   http://localhost:3000
   ```


## API Information

### Weather API

- **API Used**: Tomorrow.io Weather API
- **Purpose**: The API provides real-time and forecasted weather data, allowing the app to adjust the packing list based on expected conditions at the destination.
- **Integration**:
  - When a user submits the trip details (destination, trip type), the app makes an API request to Tomorrow.io.
  - It retrieves data such as temperature, which is used to tailor the packing list with items like jackets for colder weather or sunscreen for sunny locations.

### Setting Up the API

- Add your API key to the `.env` file as mentioned above.
- In `App.js`, the `fetchWeather` function handles API requests and processes the weather data to influence the generated packing list.

## Credits for AI-Generated Code

Parts of this project were developed with the assistance of AI-generated code suggestions to improve efficiency and enhance design. The following sections were created or refined based on AI support:

1. **Mood and Theme Toggles**: The CSS and JavaScript structure for seasonal mood themes was suggested by AI to create a dynamic, customizable UI experience.
2. **Animations and Micro-interactions**: Framer Motion-based animations, such as button scaling and fade-in effects, were inspired by AI-generated suggestions for smoother, interactive UI.
3. **API Integration**: The initial structure for integrating the Tomorrow.io Weather API and handling responses was suggested by AI to streamline data processing and improve performance.

The AI-generated code helped accelerate development by providing structure and enhancing the visual appeal of the project.

---

































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
