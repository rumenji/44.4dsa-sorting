function selectionSort(arr) {
    
    for(let i=0; i<arr.length; i++){
        let min = i;
        let j;
        for(j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min=j
            }
        }
        if(i !== min){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;