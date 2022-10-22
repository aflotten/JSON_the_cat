const request = require("request");
const args = process.argv.slice(2);
const breed = args[0];

const link = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

const breedFetcher = function (breed, cb) {
  request(link, (error, response, body) => {
    const data = JSON.parse(body);

    if(response.statusCode !== 200) {
      console.log("Error: ", error);
      throw error;
    }

    if(data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log(`${args} was not found on the server, please try again`);
    }
  });
};

breedFetcher();