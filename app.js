var express = require('express'),
  app       = express(),
  cors      = require('cors'),
  path      = require('path'),
  bodyParser= require("body-parser"),
  routes    = require("./routes/index");

  app.use(cors());
  app.use('/static', express.static(path.join(__dirname, 'views')))

  app.use(bodyParser.urlencoded({
    extended: true
 	})); 
 	
 	app.use(bodyParser.json());
  
  
  app.listen(3000, function () {
		console.log('sushil_so_node_test is listening on port 3000!')
	})

app.use("/",routes); // Set default route to route folder
module.exports = app;

