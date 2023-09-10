// api.js
// Import the Axios library for making HTTP requests

import axios from 'axios';

// Create an Axios instance called 'api' with a base URL for your API
const api = axios.create({
  baseURL: 'https://api.themoviedb.org', // Replace with your API base URL
});

// Export the 'api' instance to make it available for use in other parts of your code
export default api;
