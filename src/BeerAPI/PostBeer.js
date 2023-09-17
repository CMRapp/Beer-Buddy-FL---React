// Define the endpoint for the API to retrieve products
const ApiEndpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/beers";

// Define a function to make a POST request to the API endpoint with a new beer object
const PostBeer = async (newBeer) => {
    const response = await fetch(ApiEndpoint, {
      method: "POST", // Set the request method to POST
      headers: { "Content-Type": "application/json" }, // Set the request headers to include JSON data
      body: JSON.stringify(newBeer) // Set the request body to be the beer object converted to a JSON string
    })
    
    // Parse the response from the API as JSON data and return it
    const data = await response.json()
    return data
  }
  
  // Export the PostBeer function as the default export of the module
  export default PostBeer;