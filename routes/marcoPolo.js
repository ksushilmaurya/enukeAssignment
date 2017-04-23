var marcoPolo = {};

var getSeriesMarcoPolo = function() {
	var series = [];
	for(var i=1; i<=1000; i++) {
		var lineString = "";
		for(var j=1; j<=1000; j++) {
			if(j%4 === 0 && j%7 === 0) {
				lineString+="marcopolo,";
			} else if (j%4 === 0) {
				lineString+="marco,";
			} else if(j%7 === 0) {
				lineString+="polo,";
			} else {
				lineString+=(j + ",");
			}
		}
		series.push({line : lineString.substring(0, lineString.length-1)});
	}
	return series;
}

marcoPolo.getGameResult = function(callback) {
	setImmediate(function(){
		callback({success : true, series : getSeriesMarcoPolo()});
	})
}

module.exports = marcoPolo;