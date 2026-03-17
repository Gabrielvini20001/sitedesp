// =======================
// CAPTURA DE ELEMENTOS DO DOM
// =======================
const botaover1 = document.getElementById("di");
const botaover2 = document.getElementById("dii");
const inpt = document.getElementById("inputt");
const but = document.getElementById("but");
const diass = document.getElementById("diasgast");

// =======================
// SELECT: INVESTIR OU USAR
// =======================
const select = document.createElement("select");
select.id = "meuselect";

["Investir", "Usar"].forEach((texto, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = texto;
    select.appendChild(option);
});

// Input porcentagem
const input = document.createElement("input");
input.type = "number";
input.placeholder = "digite a %";
input.id = "inputmanual";

// Botão
const butt = document.createElement("button");
butt.textContent = "ok";

// =======================
// SELECT DIA DA SEMANA
// =======================
const select2 = document.createElement("select");
select2.id = "meuselect2";

[
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo"
].forEach(dia => {
    const option = document.createElement("option");
    option.value = dia;
    option.textContent = dia;
    select2.appendChild(option);
});

// =======================
// INPUT QUANTIDADE DE DIAS
// =======================
const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Quantidade de dias";
input2.id = "inputmanuall";

// =======================
// VARIÁVEIS
// =======================
let valor=0
let valores = 0;
let vlpct = 0;
let inves = 0;
let usar = 0;
// =======================
// EVENTO 1 – SALÁRIO
// =======================
botaover1.addEventListener("click", () => {

    const capital1 = Number(document.getElementById("capital1").value);
    const gast = Number(document.getElementById("gast").value);

    if (capital1 <= 0 || gast <= 0) {
        alert("Preencha os valores corretamente");
        return;
    }

    if (valores === 0) valores = capital1;

    const valorporct = (gast / capital1) * 100;
    valores -= gast;
    vlpct += valorporct;

    inpt.append(select, input);
    but.appendChild(butt);
    diass.append(input2);
    diass.append(select2);
    
    document.getElementById("valorsa1").textContent =
        `porcentagem atingida: ${vlpct.toFixed(2)}%, restante salario: ${valores.toFixed(2)}$`;

});

// =======================
// EVENTO INVESTIR / USAR
// =======================
butt.addEventListener("click", () => {

    const valor = Number(input.value);

    if (valor <= 0) {
        alert("Digite um valor válido");
        return;
    }

    if (select.value === "0") {
        inves += valor;
        
         const restanteinvest=inves - valores
        
        localStorage.setItem("investi", JSON.stringify(inves));
        localStorage.setItem("restinvest", restanteinvest);
        document.getElementById("resu").textContent =
            `Investimento: ${inves.toFixed(2)}, Restante:${restanteinvest.toFixed(2)}`;
    }   else if (select.value === "1"){

        usar += valor;
        const restinvest=localStorage.getItem("restinvest");
        const restinv=valor - restinvest
        localStorage.setItem("usar", valor);
        document.getElementById("vlrusar").textContent = usar;
        document.getElementById("resu").textContent = restinv;
    } else {

    }
}
);

// =======================
// EVENTO 2 – CÁLCULO POR DIAS
// =======================
botaover2.addEventListener("click", () => {

    const usar = Number(localStorage.getItem("usar"));
    const pct = Number(document.getElementById("porct").value);
    const dias = Number(input2.value);
    const diaSemana = select2.value;

    if (pct <= 0 || dias <= 0) {
        alert("Preencha porcentagem e quantidade de dias corretamente");
        return;
    }

    const valorTotal = (pct / 100) * usar;
    const valorDiario = valorTotal / dias;
    
    localStorage.setItem("valortotal", JSON.stringify(valorTotal));
    localStorage.setItem("valordiario", JSON.stringify(valorDiario));
    localStorage.setItem("diasemana", JSON.stringify(diaSemana));
    localStorage.setItem("porcent", JSON.stringify(pct));
    
    // Capturar o valor selecionado quando mudar a opção
  n  
});

let valoresSelecionados = [];

select2.addEventListener("change", function() {
    const valorSelecionado = select2.value;  // Captura o valor da opção selecionada
    
    document.getElementById("valor2").textContent=`Dia selecionado:", ${valorSelecionado}`;  
    valoresSelecionados.push(valorSelecionado);

    // Se o array tiver mais de 5 valores, remove o primeiro (mantém os últimos 5)
    if (valoresSelecionados.length > 5) {
        valoresSelecionados.shift();
    }

   
    // Armazena o array atualizado no localStorage
    localStorage.setItem('valoresSelecionados', JSON.stringify(valoresSelecionados));

    // Exibe o valor selecionado atual
    document.getElementById("valor2").textContent = `Dia selecionado: ${valorSelecionado}`;

    // Exibe os 5 últimos valores
    console.log("Últimos 5 valores selecionados: ", valoresSelecionados);
    
});

