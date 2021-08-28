
// Meu Codigo Jhon ---------------------------------

//Formata Valor Unitario em Moeda --------------------
function EmMoeda(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}

//Escutando Evento da Caixa de Descricao Item -------------------
document.getElementById("DescricaoItem").addEventListener("change", (ev) => {
    const input = ev.target;
    input.value = input.value.toUpperCase();
});

//Funções do botao calcular ----------
var botaoCalcula = document.querySelector("#BtnCalcula");

function CalculaValorTotal(Event) {
    event.preventDefault();
    var vluntBase = document.getElementById("V_Unt").value;
    var vluntFinal;
    if (vluntBase < 1000) {
        vluntFinal = document.getElementById("V_Unt").value.replace(",", ".");
    } else {
        vluntFinal = document.getElementById("V_Unt").value.replace(".", "");
        vluntFinal = vluntFinal.replace(",", ".");
    };
    var vValor = parseFloat(vluntFinal).toFixed(2);
    var vQtde = parseFloat(document.getElementById("Selecao_Qtde").value).toFixed(2);
    var Resultado = vValor * vQtde;

    document.getElementById("V_Total").value = Resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}
//Escutando o Click do BOTAO CALCULAR ----------
botaoCalcula.addEventListener("click", CalculaValorTotal);

//---------------------------------- FIM BOTAO CALCULAR -------------

var botaoAdicionar = document.querySelector("#BtnAdiciona")

function AdicionaNaTabela(Event) {
    Event.preventDefault();
    //Pegando os dados dos elementos -----

    //Caixa de Selecao Receita/Despesa ---
    var CxSelecao = document.getElementById("Selecao1"); //Caixa de Seleção
    var ConteudoCxSelecao = CxSelecao.options[CxSelecao.selectedIndex].value;
    //Descricao do Item ------
    var Descricao = document.querySelector("#DescricaoItem");
    //Qtde Definida -------
    var QtdeDefinida = document.getElementById("Selecao_Qtde"); //Caixa de Qtde
    var ConteudoQtde = QtdeDefinida.options[QtdeDefinida.selectedIndex].value;
    //Valor Unitario -------
    var vValorUnt = document.querySelector("#V_Unt");
    //Valor Total -------
    var vValorTotal = document.querySelector("#V_Total");

    //CapturaUltimoID ----------------
    var ArrayId = document.querySelectorAll(".info-id");
    var UltimoId = ArrayId[ArrayId.length - 1];
    var NovoId = Number(parseInt(UltimoId.innerHTML) + 1);

    //Cria os elementos tr e Td
    var RegistraTr = document.createElement("tr");

    //Elemento td, Imput com checbox ----
    var InputTd = document.createElement("td");
    var Input = document.createElement("input");
    Input.setAttribute("type", "checkbox");
    InputTd.appendChild(Input);
    // ------------

    var NumeroId = document.createElement("td");
    var ReceitaDespesaTd = document.createElement("td");
    var DescricaoTd = document.createElement("td");
    var QtdeTd = document.createElement("td");
    var ValorUntTd = document.createElement("td");
    var ValorTotalTd = document.createElement("td");


    //Atribui os valores dentro dos elementos ----
    NumeroId.textContent = NovoId;
    ReceitaDespesaTd.textContent = ConteudoCxSelecao;
    DescricaoTd.textContent = Descricao.value;
    QtdeTd.textContent = ConteudoQtde;
    ValorUntTd.textContent = vValorUnt.value;
    ValorTotalTd.textContent = vValorTotal.value;

    RegistraTr.appendChild(InputTd);
    RegistraTr.appendChild(NumeroId);
    RegistraTr.appendChild(ReceitaDespesaTd);
    RegistraTr.appendChild(DescricaoTd);
    RegistraTr.appendChild(QtdeTd);
    RegistraTr.appendChild(ValorUntTd);
    RegistraTr.appendChild(ValorTotalTd);
    //Atribui Linha na Tabela
    var TabelaR = document.querySelector("#TabelaResultado");
    TabelaR.appendChild(RegistraTr);

    //Mostrando o Resultado ------------------
    //console.log(ConteudoCxSelecao);
    //console.log(Descricao.value);
    //console.log(ConteudoQtde);
    //console.log(vValorUnt.value);
    //console.log(vValorTotal.value);
}

function TesteJhon(Event) {
    Event.preventDefault();

    var Imput = document.createElement("imput");
    Imput.setAttribute("type", "checkbox");

}

botaoAdicionar.addEventListener("click", AdicionaNaTabela);