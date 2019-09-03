const arr = [1, 3, 4, 5, 8, 9];
//aqui mapea o array
const newArr = arr.map(function (item, index) {
    return item + index ; 
});

console.log(newArr);
//Soma Total 
const sum  = arr.reduce(function (total, next) {
    return total + next;

});
console.log(sum);

//Sempre é preciso que ela retorne se é TRUE ou FALCE
const filter = arr.filter(function(item) {
   return item % 2 === 0; 
});
console.log(filter);

// O find ele procura o argumento que você passou para ele procurar, ferificando se é True ou Falce
const find = arr.find(function(item) {
    return item === 4;
})
console.log(find);