const myPromise = new Promise((resolve, reject) => {
    // Simulate making a network request
    setTimeout(() => {
      const data = {
        name: "John",
        age: 30,
      };
      // If the request is successful, resolve the Promise with the data
      resolve(data);
    }, 2000);
  });
  
  // Handle the resolved value with then()
  myPromise.then((data) => {
    console.log(data);
  });
  
  // Handle errors with catch()
  myPromise.catch((error) => {
    console.error(error);
  });