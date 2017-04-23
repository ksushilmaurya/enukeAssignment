var express = require('express'),
  router    = express.Router(),
	marcoPolo = require("./marcoPolo.js"),
	userStory = require("./userStory.js");

router.get('/getMarcoPoloGame', function(req, res) {
	marcoPolo.getGameResult(function(getGameResultResponse) {
		// console.log("getGameResultResponse is - " + JSON.stringify(getGameResultResponse));
		res.send(getGameResultResponse);
	})
})

router.get('/getTopSecret', function(req, res) {
	userStory.getTopSecret(function(getTopSecretResponse) {
		// console.log("getTopSecretResponse is - " + JSON.stringify(getTopSecretResponse));
		res.send(getTopSecretResponse);
	})
})

router.get('/parseInvoiceNumbers', function(req, res) {
	userStory.parseInvoiceNumbers(function(parseInvoiceNumbersResponse) {
		// console.log("parseInvoiceNumbersResponse is - " + JSON.stringify(parseInvoiceNumbersResponse));
		res.send(parseInvoiceNumbersResponse);
	})
})

module.exports = router;