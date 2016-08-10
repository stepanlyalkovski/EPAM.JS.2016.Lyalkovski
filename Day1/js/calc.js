function modifyArray(array){
    for(var i = 0; i < array.length; i++){
        if(!isNaN(array[i]) && array[i] != null){
            if(array[i] == 0) {
                array[i] = +array[i] + 10;
            }
            else if(array[i] > 100){
                array[i] -= 100;
            }
            else {
                array[i] = +array[i] + 100;
            }
        }
    }
}

modifyArray(data);
