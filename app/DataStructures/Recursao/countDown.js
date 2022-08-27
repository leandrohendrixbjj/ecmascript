function countDown(num){
  if(num < 1){ return []; }
    
  const array = countDown(num -1);
  array.unshift(num);
  return array;
}
  
console.log(countDown(5));