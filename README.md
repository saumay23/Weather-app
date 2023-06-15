This repository contains a weather application that allows users to search for a city and view the current weather information. The application utilizes the OpenWeatherMap API to fetch weather data, Headless UI for the searchable dropdown feature, and RapidAPI for obtaining cities based on user search.

## Features

Search for a city: Users can search for a specific city by typing in the search box.
Searchable dropdown: The search input provides a dropdown list of cities based on the user's input, making it easier to find the desired location.

Current weather information: Once the user selects a city, the application fetches and displays the current weather details, including temperature, humidity, wind speed, and weather conditions.

OpenWeatherMap API integration: The application integrates with the OpenWeatherMap API to retrieve weather data for the specified city.

RapidAPI integration: RapidAPI is used to obtain a list of cities based on the user's search query, which populates the searchable dropdown.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
