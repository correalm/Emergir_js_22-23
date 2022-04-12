import {AlunosService} from './Services/Alunos.service.js'
import {AlunosView} from './Views/Alunos.view.js'
import {AlunosController} from './Controllers/Alunos.controller.js'
import {MateriasService} from './Services/Materias.service.js'


const alunosService = new AlunosService()

const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'),
new MateriasService().materias
)

const alunosController = new AlunosController(alunosService, alunosView)

document.querySelector("form").addEventListener("submit",function(e){
  e.preventDefault()
  const nome = document.getElementById("first_name").value
  alunosController.add({nome})
})

document.querySelector("#search_name").addEventListener("input", function(){
    const name = this.value
    sessionStorage.setItem("search", name)

    if(name.length > 2 || name.length === 0){ //só ativa a função quando já houver duas letras digitadas
        alunosController.search(name)
    }
})

const inputEvent = new Event("input")

if(sessionStorage.getItem("search")){
    document.querySelector("#search_name").value = sessionStorage.getItem("search")
    document.querySelector("#search_name").dispatchEvent(inputEvent) //para que ele reconheça qua já há um evento em andamento
}
/*


console.log(alunos)


// inserir no thead o "nome" da cada uma das matérias
let htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

const htmlHeaderContent = Object.keys(alunos[0].notas).map(materia => {
    return "<td>" + materia + "</td>"
}).join("")
/home/miguel/Documentos/curso_js/MVC/MVC-AlunosMedias-Inicio/index.html
htmlHeader.innerHTML += htmlHeaderContent

document.querySelector("table thead").appendChild(htmlHeader)





// percorrer cada aluno  e gerar o html para incluir no tbody
function render(){
    document.querySelector("table tbody").innerHTML = "" // para não haver risco de misturar elementos html já existentes
    alunos.forEach( aluno => {
        const htmlBody = document.createElement("tr")
        let htmlMedias = `<td>${aluno.nome}</td>`
        for(materia in aluno.media){
            htmlMedias += `<td>${aluno.media[materia]}</td>`
        }
        htmlBody.innerHTML = htmlMedias
        document.querySelector("table tbody").appendChild(htmlBody)
    })
}

render()




// possibilitando a entrada de novos alunos

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault() // para que o form não seja enviado sem o tratamento adequado
    const nome = document.getElementById("first_name").value
    console.log(nome)
})

*/