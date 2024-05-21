function compoundRuleThree(){
	//definir as variaveis
	const operator1 	= document.getElementById("operator1").value;
	const time1 		= document.getElementById("time1").value;
	const production1 	= document.getElementById("production1").value;

	const operator2 	= document.getElementById("operator2").value;
	const time2 		= document.getElementById("time2").value;
	const production2 	= document.getElementById("production2").value;

	let result;
	let calcs = document.getElementsByName("calc")
	let calc;
	let show_result = document.getElementById("show-result")

	let solving = [];
	let show_solving = document.getElementById("show-solving");


	result = production1 / (operator1 * time1)
	
	//verificando qual a decisão do usuario
	for (let i = 0; i < calcs.length; i++) {
	    if (calcs[i].checked){calc = calcs[i].value}
	}

	//efetuando o cauculo de acordo com a dedcisão do usuario
	switch(calc) {
		case "time":
			result = production2 / (result * operator2)
			show_result.innerHTML = result
			document.getElementById("time2").value = result;
			//escrevendo a equação
			solving.push(`<p>${production2} / (X . ${operator2}) = ${production1} / (${time1} . ${operator1})</p>`);
			solving.push(`<p>${production2} / ${operator2}X = ${production1} / (${time1 * operator1})</p>`);
			solving.push(`<p>${production2} / ${operator2}X = ${production1 / (time1 * operator1)}</p>`);
			solving.push(`<p>${production1 / (time1 * operator1)} . ${operator2}X = ${production2}</p>`);
			solving.push(`<p>${production1 / (time1 * operator1) * operator2}X = ${production2}</p>`);
			solving.push(`<p>X = ${production2 / ((production1 / (time1 * operator1)) * operator2)}</p>`);
			break;
		case "production":
			result = (operator2 * time2) * result
			show_result.innerHTML = result
			document.getElementById("production2").value = result;
			//escrevendo a equação
			solving.push(`<p>X / (${time2} . ${operator2}) = ${production1} / (${time1} . ${operator1})</p>`);
			solving.push(`<p>X / ${time2 * operator2} = ${production1} / ${time1 * operator1}</p>`);
			solving.push(`<p>X / ${time2 * operator2} = ${production1 / (time1 * operator1)}</p>`);
			solving.push(`<p>X = ${time2 * operator2} . ${(production1 / (time1 * operator1))}</p>`);
			solving.push(`<p>X = ${time2 * operator2 * (production1 / (time1 * operator1))}</p>`);
			break
		case "operator":
			result = production2 / (result * time2)
			show_result.innerHTML = result
			document.getElementById("operator2").value = result;
			//escrevendo a equação
			solving.push(`<p>${production2} / (${time2} . X) = ${production1} / (${time1} . ${operator1})</p>`);
			solving.push(`<p>${production2} / ${time2}X = ${production1} / ${time1 * operator1}</p>`);
			solving.push(`<p>${production2} / ${time2}X = ${production1 / (time1 * operator1)}</p>`);
			solving.push(`<p>${time2 * (production1 / (time1 * operator1))}X = ${production2}</p>`);
			solving.push(`<p>X = ${production2} / ${(time2 * (production1 / (time1 * operator1)))}</p>`);
			solving.push(`<p>X = ${production2 / (time2 * (production1 / (time1 * operator1)))}</p>`);
			break 
	}

	//mostrando a resolução do problema
	show_solving.innerHTML = solving.join('');
}


const calcular 	= document.getElementById("calcular");


calcular.addEventListener('click', function(){
	compoundRuleThree();
});