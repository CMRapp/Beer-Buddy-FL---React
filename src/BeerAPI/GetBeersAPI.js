// Define the endpoint for the API to retrieve beers
const ApiEndpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

// Define an async function that retrieves beers from the API
export async function getBeersAPI() {
    try {
        // Make a GET request to the API endpoint
        const resp = await fetch(ApiEndpoint);

        // Parse the response as JSON
        const data = await resp.json();

        // Return the beer data
        return data;
    } catch (e) {
        // Log an error message if the request fails
        console.log("Fetching the beers failed", e);
    }
};