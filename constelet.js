//mutação
const usuario = {nome: 'Walace'};
usuario.nome = "Jesus";
console.log(usuario);
//utilizando let dentro do escopo da function!
function teste(x) {
    let y =2;

    if(x > 5){
        console.log(x, y);
    }
}
console.log(teste(10));