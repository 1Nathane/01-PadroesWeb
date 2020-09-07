$(document).ready(function(){
	var parcela1 = '';
	var escrita = '';
	var soma = 0;
	var subtracao = 0;
	var mutiplicacao = 0;
	var divisao = 0;
	var resultado = 0;
	var operador;
	$('button').click(function(){


		if($(this).attr('id')!='igual' && $(this).attr('id')!='OFF'){

			if($(this).attr('data-sinal')=='+'||$(this).attr('data-sinal')=='-'||$(this).attr('data-sinal')=='x'||$(this).attr('data-sinal')=='/'){

				escrita += $(this).attr('data-sinal');
				operador = $(this).attr('data-sinal');

			}
			else{

				parcela1 += $(this).attr('id');
				escrita +=$(this).attr('id');
			}

		}

		$('#resultado').text(escrita);



	});


		$('#mais').click(function(){
			if(resultado!=0 && parcela1==''){
				parcela1=resultado;
				resultado=0;
			}else{
				if(resultado!=0 && parcela1!=''){
					resultado=0;
				}
			}

			if(soma==0){
				soma+=parseInt(parcela1);
				parcela1='';
			}


		});
		$('#menos').click(function(){
			if(resultado!=0 && parcela1==''){
				parcela1=resultado;
				resultado=0;
			}else{
				if(resultado!=0 && parcela1!=''){
					resultado=0;
				}
			}

			if(subtracao==0){
				subtracao+=parseInt(parcela1);
				parcela1='';
			}

		});

		$('#vezes').click(function(){

		});
		$('#divisao').click(function(){

		});
		$('#igual').click(function(){
			if(operador == '+')
				resultado = (soma+parseInt(parcela1))
			if(operador == '-')
				resultado = (subtracao-parseInt(parcela1));
			$('#resultado').text(resultado);
			soma = 0;
			subtracao=0;
			escrita = 'Ans';
			parcela1='';

		});

});








