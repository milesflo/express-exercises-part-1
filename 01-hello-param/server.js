var express = require('express');
var app = express();
//////////
function capitalizeFirstLetter(string) {
    var names = string.split(" ");
    var output = [];
    console.log(names);
    	for (var i = 0; i < names.length; i++) {
    		output.push(names[i].charAt(0).toUpperCase() + names[i].slice(1));
    	};
    return output.join(" ");
}
//////////
app.get('/:name', function(req,res) {
	var name = req.params.name.replace("-", " ");
	if (name !== undefined) {
		res.send("Hello, " + capitalizeFirstLetter(name));
	}  else {
		res.send("Hello, Express!")
	}
});

app.listen(8000, function() {
	console.log("Listening to port 8000...");
});