let pedido_aceito = true
console.log(pedido_aceito)

console.log('Pedindo o Uber')

const promessa = new Promise((resolve, reject) => { // Está no momento pending
    if (pedido_aceito){
        return resolve('O carro está a caminho...')
    }
    return reject('Não temos veículos disponíveis para a sua região.')

})

console.log('Aguardando...')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log("Corrida finalizada."))
console.log(promessa)