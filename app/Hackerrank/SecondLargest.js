//Pega o segundo maior valor dentro de um array

function getSecondLargest(nums){
    const indexOfSecodLargest = 1;
 
    if (nums.length <= 1)
      return nums;
 
    //Order by Decresente
    const orderBy = nums.sort((a,b) => {
       if (a>b) return -1;
       if (a<b) return 1;
       return 0;
    });
 
    //Remove Duplicados
    const arr = orderBy.filter((value,index,arr) => {
       return orderBy.indexOf(value) == index;
    });
 
    return arr[indexOfSecodLargest];
 }
 
 console.log(
    getSecondLargest( [2,3,6,6,5] )
 );