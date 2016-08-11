var typeCount = 3;
for (var i = 1; i <= typeCount; i++) {
	var counter = 0;
	var method = "getCount" + i;

	for (var j = 0; j < objArray.length; j++) {	
		var test =  objArray[j][method] || function()  { return 0; };
		counter += test.call(objArray[j]);
	}

	console.log("count{%d}={%d}", i, counter);
}