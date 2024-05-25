# Weather App 🌦️

This project is a simple weather application built with React and Context API. It allows users to fetch real-time weather data for any city using the Weather API.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Learnings](#learnings)
- [Credits](#credits)
- [License](#license)

## Demo

A live demo of the application can be found [here](#) (Replace this with your GitHub Pages or another hosting link once you deploy it).

## Features

- Fetch real-time weather data for any city
- Display weather details including temperature, humidity, and weather conditions
- Responsive and user-friendly interface
- Error handling for network requests and API responses

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your Weather API key:

    ```env
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    This will open the app in your default browser at `http://localhost:3000`.

## Usage

1. Enter the name of the city in the input field.
2. Click on the "Search" button to fetch the weather data.
3. View the weather details displayed on the card.

## Learnings

- **Context API**: Managing state globally across the application without prop drilling.
- **Asynchronous Data Fetching**: Integrating an external API to fetch and display data.
- **Component Composition**: Developing reusable components for inputs, buttons, and display cards.
- **Error Handling**: Implementing robust error handling for network requests and API responses.
- **CSS Styling**: Applying CSS for styling components and adding a responsive background image.
- **React Hooks**: Utilizing `useState` and `useContext` hooks effectively for state management and context usage.

## Credits

- This project was inspired and guided by the tutorial from Piyush Garg's YouTube channel. Check out the tutorial [here](https://www.youtube.com/watch?v=73Tz6qTgNuU).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions! 😊
