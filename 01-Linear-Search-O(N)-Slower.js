// Linear Search

// Time: O(n)  "Big O of N time"

// .indexOf //n //-1
// .includes //true //false
// .find 
// .findIndex

const linearSearch = (arr,val) => {
    ///////////////////////////////////
    /////// **** for loop ***** //////
    ///////////////////////////////////
    // for(let i = 0;  i < arr.length; i++){
    //     let eachVal = arr[i]
    //     if(eachVal === val)return i
    // }
    // return -1


    ///////////////////////////////////
    /////// **** .indexOf ***** //////
    ///////////////////////////////////
    // let i = arr.indexOf(val)
    // return i


    ///////////////////////////////////
    /////// **** .includes ***** //////
    ///////////////////////////////////
    // let i = arr.includes(val)
    // return i //true
}
//console.log(linearSearch([10,15,20, 25, 30],15))



////////////////////////////////////////////
/////// **** .find .findIndex ***** ////////
////////////////////////////////////////////

let arr = [-1,-2,3]

let found = arr.find(function (val){
    return val > 0
})

console.log(found)