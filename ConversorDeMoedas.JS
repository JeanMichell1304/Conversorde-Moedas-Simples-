var ValorEmDolar = 50;
var CotacaoDoDolar = 5.1;
var ValorEmReal = ValorEmDolar * CotacaoDoDolar;
var NomeComprador = "Jean Michell";

ValorEmReal = ValorEmReal.toFixed(2);
alert("Olá, " + NomeComprador + " o valor em R$ é " + ValorEmReal);