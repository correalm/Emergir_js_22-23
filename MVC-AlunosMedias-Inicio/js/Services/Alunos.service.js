import {AlunoModel} from './../Models/Aluno.model.js'

export class AlunosService{
    constructor(){
        this.alunos = []
        this.updateListFromLocal()
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno must be a instance of AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorege()
    }

    edit(aluno){
        aluno.generateAvarege()
        this.updateLocalStorege()
    }

    searchById(id){
        console.log(this.alunos)
        return this.alunos.find( aluno => aluno._id === id)
    }

    search(name){
        return this.alunos.filter( aluno => aluno.nome.indexOf(name) >= 0)
    }

    updateLocalStorege(){
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunos)
    }

    updateListFromLocal(){
        const local = localStorage.getItem("alunos")
        if(local){
            const alunos = JSON.parse(local)
            alunos.forEach( aluno => {
                this.add(new AlunoModel(aluno))
            })

        }
    }

    
}