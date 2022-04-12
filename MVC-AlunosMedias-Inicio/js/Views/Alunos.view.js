export class AlunosView{
    constructor(table, materias){
        this.tableList = table
        this.tHeader = this.tableList.querySelector("thead")
        this.tBody = this.tableList.querySelector("tbody")
        this.materias = materias
        this.renderHeader()

        
    }

    renderHeader(){
        // inserir no thead o "nome" da cada uma das matérias
        let htmlHeader = document.createElement("tr")
        htmlHeader.innerHTML = "<td>Nome</td>"

        const htmlHeaderContent = this.materias.map(materia => {
            return "<td>" + materia + "</td>"
        }).join("")
        htmlHeader.innerHTML += htmlHeaderContent

        this.tHeader.appendChild(htmlHeader)
    }

    render(alunos){
        this.tBody.innerHTML = "" // para não haver risco de misturar elementos html já existentes
        alunos.forEach( aluno => {
            const htmlBody = document.createElement("tr")
            let htmlMedias = `<td><a href="edit.html?id=${aluno._id}">${aluno.nome}</a></td>`
            let encontrado = false

            this.materias.forEach( materia => {
                if(materia in aluno.notas){
                    encontrado = true
                }
            })

            if(encontrado){
                this.materias.forEach( materia => {
                    htmlMedias += `<td>${aluno.media[materia] !== undefined ?
                        aluno.media[materia] : 
                        `<a href="edit.html?id-${aluno._id}">Incluir nota</a>`
                        }
                    </td>`
                })
            } else{
                console.log("ELSE")
                htmlMedias += `<td colspan="${this.materias.length}">
                    <a href="edit.html?id=${aluno._id}">Incluir Notas</a>
                </td>`
                
            }

            
        htmlBody.innerHTML = htmlMedias
        this.tBody.appendChild(htmlBody)
        })
    }


}