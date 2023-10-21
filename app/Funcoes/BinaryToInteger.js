function convertToBin(num) {
    return (num >>> 0).toString(2);
  }
  
  const result = convertToBin(5)
  
  console.log(result) // 101