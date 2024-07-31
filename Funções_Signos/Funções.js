//Função que compara data inicio e data fim para pegar o signo atual
const comparaDatas = (data,data_inicio, data_fim,Comparacao) => {
if(Comparacao == "on"){
return (data >= data_inicio && data <= data_fim);
}
else if(Comparacao == "off") 
{
return (data >= data_inicio || data <= data_fim);
}
}

//Função que Percorre data inicio e Fim 
const percorreDatas = (data,Colecao) => {

//Percorre data inicial e data final
for(const Signo of Colecao){
let ano  = data.getFullYear()
let data_Inicial = new Date(ano +"-"+ Signo.Data_Inicio + " 00:00:00");
let data_Final   = new Date(ano +"-"+ Signo.Data_Fim + " 23:59:59");
let compara = Signo.Data_Inicio == "12-22" ? "off" : "on"; 
let Verdadeiro = comparaDatas(data, data_Inicial,data_Final,compara);

if(Verdadeiro){
return `Signo do dia

Signo       : ${Signo.Signo  }
Planeta     : ${Signo.Planeta}
Data inicio : ${Signo.Data_Inicio}
Data Fim    : ${Signo.Data_Fim}
`
}
}

}
    
export default percorreDatas;
    