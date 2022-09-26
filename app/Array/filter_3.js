// Find a value 

console.clear();
const posts = [
    {
        name: "Leandro",
        title: "post_1"
    },
    {
        name: "Soares",
        title: "post_2"
    },
    {
        name: "Ribeiro",
        title: "post_3"
    },
];

let name = 'Leandro';
let res = posts.filter(posts => posts.name == name);

console.log(res);

