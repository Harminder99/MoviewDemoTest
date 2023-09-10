## Project Overview
This project is a React Native application built with TypeScript. It comprises two primary components: the Home Screen and the Movie Detail Screen. Here's a brief overview of the project's key features:

### Home Screen
The Home Screen displays a list of movie posters.
It provides an engaging and visually appealing interface for users to browse popular movies.
### Movie Detail Screen
The Movie Detail Screen offers in-depth information about a selected movie.
Users can access basic movie details, such as its title, synopsis, and release date.
### Movie Data API
To populate the movie list, the application fetches data from the "The Movie Database" API.
The API endpoint used to retrieve popular movies is: https://api.themoviedb.org/3/movie/popular?api_key=

This project combines the power of React Native with TypeScript to create a user-friendly mobile app

Sure, here's a directory tree structure for the specified file 
##### Movies/src/apis/api-constants.ts:

### Some basic points about app

### Why I Chose TypeScript:
1. TypeScript was chosen for this project due to its statically-typed nature, which helps catch errors at compile time.
2. It enhances code quality by providing a clear and well-defined type system.
3. TypeScript offers better tooling support and improved code readability, making development more efficient.

### Benefits of TypeScript:
1. Type safety and reduced runtime errors.
2. Improved code maintainability and documentation.
3. Enhanced code editor support with autocompletion and type checking.

### Project Initialization
To create this project, I used the following command:

> npx react-native init Movies --template react-native-template-typescript


### Other Ways to Create the Project
You can also create the project using one of the following methods:

a. Expo: If you prefer a managed workflow and want to build a project with Expo, you can use the  expo init command.

b. React Native CLI: You can create a project without TypeScript by running 
> npx react-native init Movies.

c. create-obytes-app: If you are looking for an opinionated setup with various tools and configurations, you can use 
> npx create-obytes-app

### Dependencies and Their Benefits
The following dependencies were chosen for their specific benefits in enhancing the project:

>@react-navigation/native and @react-navigation/stack:

Chosen for their powerful and customizable navigation system.
Provide smooth screen transitions and gestures.

>@reduxjs/toolkit:

Selected for state management, simplifying setup and reducing boilerplate code.
Offers a centralized and predictable way to manage application state.

> @tanstack/react-query:

Used for efficient data fetching, caching, and synchronization.
Provides hooks for data management, caching, and real-time synchronization.

>axios:

Chosen for making HTTP requests to APIs or backend services.
Known for its simplicity, flexibility, and promise-based nature.

>react-native-fast-image:

Enhances image loading performance and memory efficiency.
Supports lazy loading, caching, and placeholder images.

>react-native-gesture-handler 
> react-native-reanimated:

Improve touch responsiveness and enable complex animations.
Enhance the user experience with interactive elements.

>react-native-safe-area-context:

Handles safe area insets on iOS devices with notches or rounded corners.
Ensures proper content display and layout on such devices.

>react-native-screens:

Optimizes screen rendering and transitions for smoother navigation.
Works seamlessly with React Navigation.

>react-redux:

Official React bindings for Redux, facilitating state management.
Simplifies integration of Redux with React components.

### Benefits of Using axios with useQuery
1. Combining axios with useQuery from React Query allows for seamless data fetching.
2. axios simplifies HTTP requests, while useQuery handles caching, background syncing, and real-time updates.
3. This combination improves the developer experience when dealing with asynchronous data and remote APIs.
