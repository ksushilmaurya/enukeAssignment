var assert  = require('assert');
  chai      = require('chai'),
	fs        = require("fs"),
	server    = require("../app.js"),
	chaiHttp  = require('chai-http');

chai.use(chaiHttp);


//  Test cases for  getTopSecret api

describe('/GET getTopSecret', function() {
  it('successfully write the result in file', function(done) {
    chai.request(server).get('/getTopSecret').end(function(err, res) {
      assert.equal(res.body.success, true);
      done();
    });
  });
 
 setTimeout(function(){
	 it('write the correct output to file', function(done) {
	    chai.request(server).get('/getTopSecret').end(function(err, res) {
	    	var currentDir = __dirname;
	    	currentDir = currentDir.substring(0,currentDir.lastIndexOf("/"));
	      fs.readFile(currentDir+'/output_top_secret_1.txt', 'utf8', function (err,data) {
				  if (err) {
				    return console.log(err);
				  }
				  var result = data.split("\n");
				  assert.equal(result[0], "600143155");
				  assert.equal(result[1], "6504?8454 ILLEGAL");
				  assert.equal(result[2], "38?057021 ILLEGAL");
	      	done();
				})
	    });
	  });
	 	
 })	

});


// Test cases for parseInvoiceNumbers
describe('/GET parseInvoiceNumbers', function() {
  it('successfully write the result in file', function(done) {
    chai.request(server).get('/getTopSecret').end(function(err, res) {
      assert.equal(res.body.success, true);
      done();
    });
  });
 
 setTimeout(function(){
	 it('write the correct output to file', function(done) {
	    chai.request(server).get('/parseInvoiceNumbers').end(function(err, res) {
	    	var currentDir = __dirname;
	    	currentDir = currentDir.substring(0,currentDir.lastIndexOf("/"));
	      fs.readFile(currentDir+'/output_user_story_1.txt', 'utf8', function (err,data) {
				  if (err) {
				    return console.log(err);
				  }
				  var result = data.split("\n");
				  assert.equal(result[0], "600143155");
				  assert.equal(result[1], "650408454");
	      	done();
				})
	    });
	  });
 })	
});

// Test cases for marcopolo game api

describe('/GET getMarcoPoloGame', function() {
  it('successfully getting the result', function(done) {
    chai.request(server).get('/getMarcoPoloGame').end(function(err, res) {
      assert.equal(res.body.success, true);
      done();
    });
  });

  it('hitting the api 5 users parallely ', function(done) {
    chai.request(server).get('/getMarcoPoloGame').end(function(err, res) {
    });
    chai.request(server).get('/getMarcoPoloGame').end(function(err, res) {
    });
    chai.request(server).get('/getMarcoPoloGame').end(function(err, res) {
    });
    chai.request(server).get('/getMarcoPoloGame').end(function(err, res) {
    });
    chai.request(server).get('/getMarcoPoloGame').end(function(err, res) {
    });
    done();
  });
})