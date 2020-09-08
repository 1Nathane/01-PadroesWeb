$(document).ready(function () {
	var parcela1 = '';
	var escrita = '';
	var conta = 0;
	var resultado = 0;
	var operador;
	$('button').click(function () {
		if ($(this).attr('id') != 'igual' && $(this).attr('id') != 'OFF') {
			if ($(this).attr('data-sinal') == '+' || $(this).attr('data-sinal') == '-' || $(this).attr('data-sinal') == 'x' || $(this).attr('data-sinal') == '/') {
				escrita += $(this).attr('data-sinal');
				operador = $(this).attr('data-sinal');
			}
			else {
				parcela1 += $(this).attr('id');
				escrita += $(this).attr('id');
			}
		}
		$('#resultado').text(escrita);
	});
	$('#mais , #menos, #vezes, #divisao').click(function () {
		if (resultado != 0 && parcela1 == '') {
			parcela1 = resultado;
			resultado = 0;
		}
		else {
			if (resultado != 0 && parcela1 != '') {
				resultado = 0;
			}
		}
		if (conta == 0) {
			conta += parseInt(parcela1);
			parcela1 = '';
		}
	});


	$('#igual').click(function () {
		switch(operador){
			case '+':
				resultado = (conta + parseInt(parcela1));
				break;
			case '-':
				resultado = (conta - parseInt(parcela1));
				break;
			case '/':
				resultado = (conta / parseInt(parcela1));
				break;
			case 'x':
				resultado = (conta * parseInt(parcela1));
				break;
		}
		$('#resultado').text(resultado);


		conta = 0;

		escrita = '';//colocar como Ans quando for usar resposta anteriro.
		parcela1 = '';
	});

	$('#OFF').click(function () {
		resultado = 0;
		escrita = '';
		parcela1='';
		soma = 0;
	 	subtracao = 0;
		mutiplicacao = 0;
		divisao = 0;
		operador = '';


	});
});
