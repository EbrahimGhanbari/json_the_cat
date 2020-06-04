const request = require("request");

const breed = "?q=" + process.argv[2];
const website = "https://api.thecatapi.com/v1/breeds/search" + breed;

request(website, (error, response, body) => {
 
  if (error) {
    console.log("Website NOT FOUND");
    return error;
  }

  const data = JSON.parse(body);

  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("oops, we can not find this cat breed");
  }

});
