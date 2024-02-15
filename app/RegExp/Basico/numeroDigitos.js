console.clear()

// Permite numero de no máxmo 3 digitos
const regexp = /^([0-9]\s?){1,3}$/g

console.log(
  regexp.test("12")
);

