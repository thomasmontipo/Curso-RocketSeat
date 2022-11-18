const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homame mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
            
        ]
    },
    {
        category: "Inteligêcia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Augusto Cury",
            },
        ]
    }
]

const total_categorias = booksByCategory.length
console.log(total_categorias)

for (let books_categorias of booksByCategory){
    console.log(`A quantidade de livros da categoria ${books_categorias.category} é ${books_categorias.books.length}`)
}

function ContarAutores(){
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    
    console.log(`Temos um total de ${authors.length} autores.`)
}

ContarAutores()

function ContarCury(){
    let cury = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === "Augusto Cury"){
                cury.push(book.title)
            }
        }
    }
    
    console.log(`Os livros do autor Augusto Cury são "${cury.join("; ")}".`)
}

ContarCury()


function ContarAutor(autor){
    let author = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === autor){
                author.push(book.title)
            }
        }
    }
    
    console.log(`Os livros do autor ${autor} são "${author.join("; ")}".`)
}

ContarAutor("Robert T. Kiyosaki e Sharon L. Lechter")