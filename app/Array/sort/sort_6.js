// Order an array of letters

const names = ['b','a'];

names.sort((a,b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(names);