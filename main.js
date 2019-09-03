class List{
    constructor(){
        this.data =[];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor(){
        super();


        this.usuario = 'Walace';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

let MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('novo Todo');
}

MinhaLista.mostraUsuario();
