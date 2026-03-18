// =======================
// BOTÕES CALCULAR 
// =======================
const botaover=document.getElementById("d");
const botaosld=document.getElementById("sld");

//VARIAVEIS DE CONTAGEM 
let saldo=0;
let porcent=0;
let vl=0;

// =======================
// RESGATAR DADOS DO LOCAL STORAGE
// =======================
const d=localStorage.getItem("valortotal");
const dd=JSON.parse(d);

const lg=localStorage.getItem("valordiario");
const llg=JSON.parse(lg)

const porct=localStorage.getItem("porcent");
const prct=JSON.parse(porct)

const diassemana=localStorage.getItem("valoresSelecionados");
const semana=JSON.parse(diassemana)

//SELEÇÃO DO METODO DATA
const dias=[
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    
]
//COMPARANDO O METODO DATA COM O LOCAL STORAGE
const data=new Date();
 const hojee=data.getDay(semana)
 const hoje = dias[hojee];


// EXIBINDO DIAS DA SEMANA QUE SE ENQUADRA NO METODO DATA

 if( semana.includes(hoje)){
  
  document.getElementById("dia").textContent=hoje;
 }
  
  //EXIBINDO DADOS DE  TOTAL A GASTAR E GASTO DIARIO DO LOCAL STORAGE
  document.getElementById("totalgast").textContent=dd;
 
  document.getElementById("diariogast").textContent=llg;

  //EXIBINDO INVESTIMENTO
  const invt=localStorage.getItem("investi");

  document.getElementById("investim").textContent=`investimento:${invt}`

  
         
// =======================
// BOTÃO CLICK
// =======================
  const bot=botaover.addEventListener("click", ()=>{ 
    

 
      
  
  //capturando o valor da despesa
  const desp=document.getElementById("gast").value;
 
 //Calculo de porcentagem
  const valort= ( desp / llg) * 100;
  
//somando as porcentagens
    porcent += valort

   
 
 if(saldo === 0){
        saldo = llg;
    }

    // subtração acumulada
    saldo = saldo - desp;

  
  
//exibindo todo o valor
  const valor=document.getElementById("valortotal");
  const vl=valor.textContent=`Porcentagem atingida:${porcent.toFixed(2)}% ,valor restante:${saldo}$`
  localStorage.setItem("saldo", saldo);
  const exc=document.getElementById("exc");
  const v=localStorage.setItem("vl", vl);
 
  
  
  if(porcent >= prct){
        valor.style.color ="red";
      exc.textContent="Limite excedido";
       exc.style.color ="red"; 
    }

  } )
  const vi=localStorage.getItem("vl");

  

 document.getElementById("valortotal").textContent=vi;
 botaosld.addEventListener("click", ()=>{ 
  const sal=localStorage.getItem("saldo");
  const num=Number(sal);
  const sald=document.getElementById("sald").value;
  const saldd=num - sald;
  document.getElementById("vl").textContent=saldd; 
});