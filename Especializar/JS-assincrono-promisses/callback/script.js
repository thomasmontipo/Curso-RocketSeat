// funções aceitam qualquer tipo de dados
function ImprimirDado(dado){
    console.log(dado())
}


ImprimirDado(function(){
    return "Dado"
})