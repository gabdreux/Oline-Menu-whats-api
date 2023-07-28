$(document).ready(function() {
    cardapio.eventos.init();
})

var cardapio = {};


cardapio.eventos = {

    init: () => {
        console.log('init cardapio');
    }

}


cardapio.metodos = {
    
    obterItensCardapio: () => {
        var filtro = MENU['burguers'];
        console.log(filtro);
        
        $.each(filtro, (i, e) => {

        
        })


    },

}


cardapio.templates = {

    
    
}