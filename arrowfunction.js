const arr = [1, 3, 4 ,5, 6];

//Se o parametro houver só ele mesmo(um só) então você pode remover os parenteses
const newArr = arr.map(item => item * 2);
console.log(newArr);

//Esse metodo não é recomendado
const teste = () => {
    return 'teste';
}
console.log(teste());
//Esse metodo não é recomendado
const teste1 = () => ({ nome: 'Walace'});
console.log(teste1());