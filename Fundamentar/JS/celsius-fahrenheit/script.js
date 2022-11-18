function converter(){
    let temp = Number(window.document.getElementById('entrada').value)
    let res = window.document.getElementById('res')
    console.log(temp)

    if (c.checked){
        let c_degree = temp * (9/5) + 32
        res.innerHTML = `${temp}°C equivale a ${c_degree}°F`
        console.log("ºC", c_degree)
    }

    else if (f.checked){
        let f_degree = (temp-32) * (5/9)
        res.innerHTML = `${temp}°F equivale a ${f_degree}°C`
        console.log("ºF", f_degree)
    }
}