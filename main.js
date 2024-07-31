import Colecao from "./Dados_Coleções/Coleção.js"
import percorreDatas from "./Funções_Signos/Funções.js"
const dataAtual = new Date();
let SignoDoMes  = percorreDatas(dataAtual,Colecao);
//Apresentação do Signo atual
console.log(SignoDoMes);