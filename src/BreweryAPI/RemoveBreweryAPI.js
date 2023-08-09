// Define the endpoint for the API to retrieve products
const ApiEndpoint = "https://64bedc3b5ee688b6250d0246.mockapi.io/breweries";

// define an asynchronous function to remove an order from the API by index
const RemoveBrewery = async (index) => {
    // use fetch to send a DELETE request to the specified endpoint URL
    const response = await fetch(`${ApiEndpoint}/${index}`, {
      method: "DELETE",
    });
    // convert the response to JSON format
    const data = await response.json();
    // return the data
    return data;
  }
  
  // export the RemoveBrewery function for use in other modules
  export default RemoveBrewery;