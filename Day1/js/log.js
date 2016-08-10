function printArray(array) {
    for(var i = 0; i < array.length; i++){
        var element = array[i];
        var message = "";

        if(element === undefined){
            message = "element is not defined";
        }
        else if(element == null){
            message = "element is null";
        }
        else {
            message = "data[" + i + "]=" + element;
        }
        console.log(message);
    }
}

printArray(data);