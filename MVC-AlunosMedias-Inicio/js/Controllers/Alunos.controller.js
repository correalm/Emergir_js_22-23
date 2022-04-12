import { AlunoModel } from "./../Models/Aluno.model.js"

export class AlunosController{
    constructor(service, view){
        view.render(service.alunos)
        this.view = view
        this.service = service
    }

    // adicionando um novo aluno
    add(aluno){
        this.service.add(new AlunoModel(aluno))
        this.view.render(this.service.alunos)
    }

    search(name){
        const data = this.service.search(name)
        this.view.render(data)
    }
}