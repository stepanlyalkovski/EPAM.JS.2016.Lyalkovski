var objArray = [];
var length = 5;

for (var i = 0; i < length; i++) {	
	var type = random(1,3);
	var methodName = "getCount" + type;

	objArray[i] = { count: random(1,10) };
	objArray[i][methodName] = function() {
		return this.count;
	}; 

	console.log("type={%s}, count={%d}", type, objArray[i][methodName]());
}
