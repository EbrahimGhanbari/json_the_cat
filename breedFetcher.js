const request = require("request");

const fetchBreedDescription = (breedName, callback) => {

  const website = "https://api.thecatapi.com/v1/breeds/search" + "?q=" + breedName;

  request(website, (error, response, body) => {
 
    if (error) {
      callback("Website NOT FOUND");
      return error;
    }
  
    const data = JSON.parse(body);

    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("oops, we can not find this cat breed");
    }
  
  });
};

module.exports = fetchBreedDescription;