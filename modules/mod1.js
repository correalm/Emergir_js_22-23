import {Mymod2} from './mod2.js'

function myMod1(){
    console.log("My mod1")
    return "valor retornado"
}

export function function_nomeada(){
    return "Exportando função nomeada"
}

console.log(new Mymod2())
export default myMod1