/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// function pivot(arr){
//     let pivotIdx = 0; 
//     for(let i=1; i<arr.length; i++){
//             if(arr[i]<arr[pivotIdx]){
//                 for(let j=i; j>pivotIdx; j--){
//                     let temp = arr[j];
//                     arr[j] = arr[j-1];
//                     arr[j-1] = temp;
//                 }
//                 pivotIdx++;
//         }
//     }
//     return pivotIdx
// }
function pivot(arr, start = 0, end = arr.length-1){
        const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        };
        let pivotIdx = start;
        for(let i=start+1; i<=end; i++){
                if(arr[start]>arr[i]){
                    pivotIdx++;
                    swap(arr, pivotIdx, i)
            }
        }
        swap(arr, start, pivotIdx)
        return pivotIdx
    }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length-1) {
    if(left<right){
        const pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx-1);
        quickSort(arr, pivotIdx+1, right);
    }
    
    return arr
}

module.exports = {pivot, quickSort};