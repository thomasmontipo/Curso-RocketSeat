// Exercícios Fundamentar -> Módulo 6 -> Exercícios

// 1. Declare uma variável de nome weight
    let weight

// 2. Que tipo de dados é a variável acima?
    console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (Integer)
        * stars: Number (float)
        * inSubsvribed: Boolean
*/
    let name = "Thomas"
    let age = 13
    let stars = 4.9
    let inSubsvribed = true
    

/*
    4. A variável student abaixo é de que tipo de dado?

   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

   4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> pelos valores de cada propriedade do objeto
*/
    let student = {}   -> Object
    let student = {
        let name: "Thomas"
        let age: 13
        let weight: 4.9
        let inSubsvribed: true
    }
    
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`)
/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, o Array vazio
*/
    let students=[]
/*
    6. Reatribua valor para a variável acima colocando dentro dela um objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto cirado e inserir ele no array)

*/
    students = [student]
/*
    7. Coloque no console o valor da posição zero do array acima
*/
    console.log(students[0])
/*
    8. Crie um novo student e colocque na posição 1 do array students
*/
    let john = {
        let name: "john"
        let age: 26
        let weight: 50.9
        let inSubsvribed: true
}
/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e porque? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

    // undefined, por que o "var a" vai subir (holding) para antes do console.log mas não vai levar o seu value