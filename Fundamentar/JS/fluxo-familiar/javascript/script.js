let family_flow = {
    receitas: [2500, 2000, 200],
    despesas: [1200, 600, 100]
}

function sum(array){
    let total = 0;
    let value = 0

    for( value of array) {
        total += value
    }

    return total

}

function calculate(){
    const tot_receitas = sum(family_flow.receitas)
    const tot_despesas = sum(family_flow.despesas)

    let final_tot = tot_receitas - tot_despesas

    console.log(final_tot)

    let mensage = `Seu saldo foi ${final_tot}`

    if (final_tot >= 0){
        mensage = "Positivo" 
    }

    console.log(`Seu saldo é ${mensage}: ${final_tot}`)
}

calculate()
