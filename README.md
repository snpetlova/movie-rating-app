# Movie Rating App

This is a movie rating web application built using React and TypeScript with Vite. It allows users to rate and review movies.

## Features

- User authentication as a guest
- Browse movies
- Rate and review movies
- View movie details
- Responsive design

## Technologies Used

- React
- TypeScript
- Semantic UI React
- React Router DOM
- react-query by TanStack
- react-toastify
- Vite

## The Movie Database (TMDb) API

This application utilizes The Movie Database (TMDb) API to fetch movie data. TMDb is a community-built movie and TV database where users can discover and explore movies and TV shows. It provides extensive information about movies, including details like title, overview, release date, genres, ratings, and more.

To use the TMDb API with this application, you will need to sign up for an account on [TMDb website](https://www.themoviedb.org/) and obtain an API key. Once you have the API key, you need to set it as an environment variable in the `.env` file as follows:

VITE_API_KEY==YOUR_TMDB_API_KEY

## Getting Started

### Prerequisites

- Node.js (>=10.0.0)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/snpetlova/movie-rating-app

2. Navigate to project directory:

   `cd movie-rating-app`

3. Install dependencies: `npm install` or `yarn install`

### Configuration

1. Create a `.env` file in the root directory of the project.

2. Add necessary environment variables:
`VITE_API_KEY=YOUR_API_KEY`
Replace YOUR_API_KEY with your API key for accessing movie data.

3.Run the application:
`npm run dev` or `yarn dev`

The application should be running at `http://localhost:5173`.

## Credits

This project was developed following the tutorial from YouTube. Credits to PedroTech for the helpful guidance and instructions provided in the tutorial.

## Website

You can also visit it [here](https://rateyourfavourites.netlify.app/).

### Troubleshooting

If you encounter any issues with the website or have questions about deployment, please don't hesitate to [contact me](snpetlova@gmail.com).



