// // Make a GET request to your API endpoint
// console.log('HI AARON');

fetch('http://108.49.99.17/api/threads/getThread')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Do something with the data received from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('There was a problem with the fetch operation:', error);
  });

// fetch("http://108.49.99.17/api/threads/getThread")
// .then((res) => console.log(res));