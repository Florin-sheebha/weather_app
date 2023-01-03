const request = require("request");

function forecast(long,lat,cb) {
  request(
    `http://api.weatherstack.com/current?access_key=07e57935d6d89cc19382560cc714c473&query=${long},${lat}`,
    function (error, response, body) {
      console.error("error:", error);
      var obj = JSON.parse(body);
      cb(obj.current.weather_descriptions[0])
    }
  );
}

module.exports = forecast;
