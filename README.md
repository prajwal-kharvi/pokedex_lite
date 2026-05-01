## Pokemon Explorer App(pokedex_lite)
A responsive Pokemon web application built with React that allows users to browse, search, filter, and favorite Pokémon. Users can also view detailed stats and abilities through an interactive modal.

## Features
-Search Pokemon by name
-Filter Pokemon by type
-Add/remove favorites (stored in localStorage)
-Detailed modal view (stats, abilities)
-Pagination (Next / Previous)
-Fast and responsive UI

## Tech Stack
#React (with Hooks)
-Used for building the user interface with reusable components and hooks like useState and useEffect
-Why I used React:-Because it makes UI modular, fast, and easier to manage state

#Vite
-Used as the build tool and development server
-Why I used Vite:-Because it faster than traditional tools like CRA, with instant hot reload

#Tailwind CSS
-Used for styling the UI
-Why I used TailwindCSS: Tailwind CSS follows a utility-first approach allows quick and responsive design without writing custom CSS

#PokeAPI
-Used to fetch Pokémon data
-Why: PokeAPI is a free and reliable source that provides comprehensive Pokémon data, including stats, abilities, and types

## Installation and Setup

#Clone the Repository
git clone https://github.com/prajwal-kharvi/pokedex_lite
cd <project-folder>

#Install Dependencies
npm install

#Run the App
npm run dev

#Open in Browser
http://localhost:5173


## Challenges and Solutions
#Handling Large API Data
-Problem:Fetching and rendering many Pokémon caused performance issues
-Solution:Used pagination (next / previous) from the API to load data in chunks instead of all at once

#Managing Multiple States
-Problem: Handling search, filter, pagination, and favorites together became complex
-Solution:Created a custom hook (usePokemon) to centralize logic and keep components clean

#Modal Click Issues
-Problem: Clicking the favorite button also opened the detail modal
-Solution:Used e.stopPropagation() to prevent event bubbling

#Loading & Error Handling
-Problem: UI looked broken during API calls or failures
-Solution:Added shimmer loading UI  and error component with retry button

## Deployment
-The application has been deployed using Vercel.
Live Demo: https://pokedexlite-cly83bz2y-prajwal-kharvis-projects.vercel.app/ 
-GitHub Repository: https://github.com/prajwal-kharvi/pokedex_lite
