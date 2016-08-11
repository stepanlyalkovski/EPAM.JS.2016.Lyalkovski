for(var i = 0; i < data.length; i++){
    if(data[i]){
        if(data[i] > 100){
            data[i] -= 100;
        } else {
            data[i] = +data[i] + 100;
        }
    } else if(data[i] === 0){
            data[i] += 10;
        }
}

printArray();

/*test function */
function check(arg){
    if(arg){
        return "if - true";
    } else {
        return "if - false";
    }
}

