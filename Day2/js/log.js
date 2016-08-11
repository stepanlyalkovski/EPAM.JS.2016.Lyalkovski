var typeCount = 3;
for (var i = 1; i <= typeCount; i++) {
	var counter = 0;
	var method = "getCount" + i;
	for (var j = 0; j < objArray.length; j++) {	
		if (objArray[j][method] === undefined) {
			continue;
		} else {
			counter += objArray[j][method]();
		}
	}
	console.log("count{%d}={%d}", i, counter);
}