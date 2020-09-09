//Divide and Conquer method
//ex25
//write a function called binarySearch which a ccepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

//binarySearch([1,2,3,4,5],2)//1
//binarySearch([1,2,3,4,5],3)//2
//binarySearch([1,2,3,4,5],6)//-1

//TIME O(log N)
//logarithmic search

const binarySearch = (arr,val) => {

 let leftIdx = 0
 let rightIdx = arr.length-1
 let middleIdx = Math.floor((leftIdx + rightIdx ) / 2)

// console.log(leftIdx)
// console.log(rightIdx)

 while(arr[middleIdx] !== val && leftInx <= rightIdx){
     if(arr[middleIdx] < val) {
         leftIdx = middleIdx + 1;
     }
     else if(arr[middleIdx] > val){
         rightIdx = middleIdx -1;
     }
     else{
         leftIdx = middleIdx + 1
     }
     middleIdx = Math.floor((leftIdx + rightIdx) /2)
     }
     if(arr[middleIdx] === val) return middleIdx
 }

//binarySearch([1,2,3,4,5],2)//1
console.log(binarySearch([1,2,3,4,5],3))//4
//binarySearch([1,2,3,4,5],6)//-1




// My First Try. didn't work.  
// let middleIdx = (leftIdx+rightIdx)/2
// console.log(arr[middleIdx])
//     if(arr[middleIdx]=== val) return middleIndx
//     while(arr[middleIdx] !== val){ 
//         if(arr[middleIdx] < val){ // [1,2,3,4,5]2
//             rightIdx = middleIdx
//         }
//         if(arr[middleIdx] > val){ // [1,2,3,4,5]2   
//             leftIdx = middleIdx
//         }
//     }

