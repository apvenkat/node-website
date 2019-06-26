var express = require('express');
var router = express.Router();
var request = require("request");
var options = { method: 'GET',
            url: 'http://devices.webofthings.io/pi/sensors/',
            headers: 
            { Accept: 'application/json' } };
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                sensorlist = JSON.parse(body)
            });
           
router.get('/', function(req, res,next){ 
    if (req.accepts('html')) 
        { 
            res.render('index',{data:sensorlist.temperature.value});
        }
    else
    {
        res.json(sensorlist.temperature)
    }
});
   
module.exports = router;
