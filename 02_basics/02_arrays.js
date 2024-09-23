const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]


//Test case 1
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

//Test case2
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//test case 3
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

