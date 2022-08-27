export default function(arr){
    return arr.filter(n => !Number.isInteger(n));
}