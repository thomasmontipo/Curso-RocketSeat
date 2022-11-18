function submit() {
    let notas = Number(window.document.getElementById('nota').value)
    let res = window.document.getElementById("res")
    console.log(notas)
    console.log(res) 

    if (notas < 60){
        res.innerHTML = `A nota ${notas} é equivalente a F`
    }

    else if (notas >= 60 && notas <= 69){
        res.innerHTML = `A nota ${notas} é equivalente a D`
    }

    else if (notas > 69 && notas <= 79){
        res.innerHTML = `A nota ${notas} é equivalente a C`
    }
    
    else if (notas > 79 && notas <= 89){
        res.innerHTML = `A nota ${notas} é equivalente a B`
    }

    if (notas > 89){
        res.innerHTML = `A nota ${notas} é equivalente a A`
    }
}
