import {AlunosService} from './js/Services/Alunos.service.js'
import {EditView} from './js/Views/EditView.view.js'
import {EditController} from './js/Controllers/Edit.controller.js'
import {MateriasService} from './js/Services/Materias.service.js'

const alunosService = new AlunosService()

const paramsString = window.location.search
const URLparams= new URLSearchParams(paramsString)
const id = parseInt(URLparams.get("id"))        

const aluno = alunosService.searchById(id)

document.getElementById("first_name").value = aluno.nome

const editAlunoView = new EditView(document.querySelector("[data-edit-aluno-form]"),
new MateriasService().materias)

const editController = new EditController(aluno, editAlunoView, alunosService) 

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()

    const nome = document.querySelector("#first_name").value

    editController.edit(aluno, nome)
    window.location.assign("index.html")
    console.log(nome)
})