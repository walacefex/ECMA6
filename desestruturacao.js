 const usuario = {
     nome: 'Walace',
     idade: 23,
     endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
     },
 };
//Primeiro teste de desestruturação 
// const { nome, idade, endereco:{cidade} } = usuario;

//  console.log(nome);
//  console.log(idade);
//  console.log(cidade);


 function mostraNome({nome, idade}) {
    console.log(nome, idade);
 }

 mostraNome(usuario);