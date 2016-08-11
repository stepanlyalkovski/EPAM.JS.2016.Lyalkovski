function printArray() {
    for(var i = 0; i < data.length; i++){
        var element = data[i];
        var message = "";

        if(element === undefined){
            console.log("element is not defined");
        }
        else if(element == null){
            console.log("element is null");
        }
        else {
            console.log("data[%d]=%s", i, element);
        }

    }
}
