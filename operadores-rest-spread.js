//REST pega o resto das propriedades

const usuario = {
    nome: 'Walace',
    idade: 21,
    empresa: 'Kalunga'
};

const {nome, ...resto} = usuario;
 
const arr = [1, 2, 3, 4];
const [a, ...c] = arr;



function soma(t, p, ...params) {
    return params;
}


//saidas
console.log(nome);
console.log(resto);
console.log(a);
console.log(c);
console.log(soma(1, 3, 42, 2, 5, 7, 9));


//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [ ...arr1, ...arr2];

const usuario1 = {
    nome: 'Bruno',
    idade: 23,
    empresa: 'UFC'
};

const usuario2  = {...usuario1, nome: 'Julio'};

//saidas
console.log(arr3);
console.log(usuario2);