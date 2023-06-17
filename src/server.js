require("dotenv").config();
var axios = require("axios");

const logger = (item) => {
  console.log(item);
};

const API_KEY = process.env.API_KEY;
console.log(API_KEY);

var config = {
  method: "get",
  url: "https://api.flutterwave.com//v3/bills/9300049404444",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
};

axios(config)
  .then(function (response) {
    logger(JSON.stringify(response.data));
  })
  .catch(function (error) {
    logger(error);
  });
